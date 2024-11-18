export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  // CORS Headers
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    const targetUrl = "https://api.datalot.com/contact/create/v2";

    // Forward the request
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        "Content-Type": "application/xml",
        // Forward any other necessary headers
        ...Object.fromEntries(request.headers),
      },
      body: request.body,
    });

    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: {
        ...headers,
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to proxy request" }), {
      status: 500,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });
  }
}

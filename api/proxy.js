import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};

export default async function handler(req, res) {
  // Get the raw body data
  const rawBody = await getRawBody(req);

  if (req.method === "POST") {
    try {
      console.log("Incoming raw body:", rawBody.toString());

      const response = await fetch(
        "https://api.datalot.com/contact/create/v2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/xml",
          },
          body: rawBody, // Use the raw body directly
        }
      );

      const result = await response.text();
      console.log("API Response: ", result);
      res.status(response.status).send(result);
    } catch (error) {
      console.error("Proxy Error:", error);
      res.status(500).send(`Error: ${error.message}`);
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}

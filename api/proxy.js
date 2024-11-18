export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Incoming req.body: ", req.body);

      const response = await fetch(
        "https://api.datalot.com/contact/create/v2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/xml",
          },
          body:
            typeof req.body === "string" ? req.body : JSON.stringify(req.body),
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

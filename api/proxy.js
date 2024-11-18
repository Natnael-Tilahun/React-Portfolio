export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://api.datalot.com/contact/create/v2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/xml",
          },
          body: req.body, // XML sent from the frontend
        }
      );

      const result = await response.text();
      res.status(response.status).send(result);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("req.body: ", req.body);
    try {
      const response = await fetch(
        "https://api.datalot.com/contact/create/v2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/xml",
          },
          body: `
          <?xml version="1.0" encoding="UTF-8"?>
<contact_create>
    <access_key>p8h9l5cfwx</access_key>
    <source_id>14860</source_id>
    <product_id>740</product_id>
    <campaign_id>bdc_64604_business_phone_systems</campaign_id>
    <pass_through>1234</pass_through>
    <contact_permission>
        <lead_id>trustedform</lead_id>
        <phone_explicit>1</phone_explicit>
        <mobile_explicit>1</mobile_explicit>
        <autodial_explicit>1</autodial_explicit>
        <sms_explicit>1</sms_explicit>
        <mms_explicit>1</mms_explicit>
        <email_explicit>1</email_explicit>
        <form_url>WEBSITELEADCAMEFROM</form_url>
        <legal_language>LEGALLANGUAGE LEAD SAW ON FORM SUBMIT</legal_language>
    </contact_permission>
    <contact_info>
        <general_info>
            <first_name>Datalot</first_name>
            <last_name>Smith</last_name>
            <phone_home>4094344023</phone_home>
            <email>kdskfjslkdffffffjdslf@aol.com</email>
            <city>Beaumont</city>
            <state>TX</state>
            <zip_code>77706</zip_code>
        </general_info>
        <product_info>
            <bdc_category>business_phone_systems</bdc_category>
            <service_type>Installing new phone system</service_type>
            <number_of_phones>1-3</number_of_phones>
        </product_info>
    </contact_info>
    <test>1</test>
</contact_create>

          `, // XML sent from the frontend
        }
      );

      const result = await response.text();
      console.log("result: ", result);
      res.status(response.status).send(result);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}

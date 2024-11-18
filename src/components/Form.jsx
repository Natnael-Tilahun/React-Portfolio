import React, { useState } from "react";

function Form() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_home: "",
    email: "",
    city: "",
    state: "",
    zip_code: "",
    service_type: "Installing new phone system",
    number_of_phones: "1-3",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(window.location.href);

    // Create XML string
    const xmlData = `
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
    `;

    console.log("xmlData: ", xmlData);

    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/xml",
        },
        body: xmlData,
      });

      const result = await response.text();
      console.log("API Response:", result);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 space-y-4"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>

        <input
          type="tel"
          name="phone_home"
          placeholder="Phone Number"
          value={formData.phone_home}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="zip_code"
            placeholder="ZIP Code"
            value={formData.zip_code}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>

        <select
          name="service_type"
          value={formData.service_type}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black"
        >
          <option value="Installing new phone system">
            Installing new phone system
          </option>
          <option value="Upgrading existing system">
            Upgrading existing system
          </option>
          <option value="Switching providers">Switching providers</option>
        </select>

        <select
          name="number_of_phones"
          value={formData.number_of_phones}
          onChange={handleChange}
          className="w-full p-2 border rounded text-black"
        >
          <option value="1-3">1-3 phones</option>
          <option value="4-10">4-10 phones</option>
          <option value="11+">11+ phones</option>
        </select>

        <div className="flex items-center">
          <input type="checkbox" id="terms" className="mr-2" required />
          <label htmlFor="terms" className="text-sm">
            I agree to receive phone calls, SMS, and emails about business phone
            systems
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {loading ? "Loading...." : ""}
        Submit
      </button>
    </form>
  );
}

export default Form;

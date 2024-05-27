import React, { useState } from "react";
import styles from "./form.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    acceptedPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className={`${styles.contactFormContainer} mt-60`}>
        <div className="mr-20">

      <h1 className="text-9xl">
        We're social! If you'd <br/>like to talk about your <br/> project, get in touch.
      </h1>
      <p className="mt-6 text-4xl">
        Regístrate y disfruta de todas las ventajas que te <br/> ofrecemos, introduce
        tus platos y empieza la <br/> transformación de tu restaurante:
      </p>
        </div>
      <div className={styles.contactForm}>
       
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className={styles.policyContainer} style={{marginTop:'50px',paddingTop:'20px'}}>
            <input
              type="checkbox"
              name="acceptedPolicy"
              checked={formData.acceptedPolicy}
              onChange={handleChange}
            />
            <label className="mb-4">
              I have read and accept the{" "}
              <a href="/privacy-policy">privacy policy</a>.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

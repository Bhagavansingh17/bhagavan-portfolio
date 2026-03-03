import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7jc5yzu",   // <-- Replace with your Service ID
      "template_60sdgl2",  // <-- Replace with your Template ID
      form.current,
      "VBjBbC_NUrgSx05tG"    // <-- Replace with your Public Key
    )
    .then(() => {
      alert("Message Sent Successfully!");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input 
          type="text" 
          name="user_name"
          placeholder="Your Name" 
          required 
        />

        <input 
          type="email" 
          name="user_email"
          placeholder="Your Email" 
          required 
        />

        <textarea 
          name="message"
          placeholder="Your Message" 
          required 
        />

        <button type="submit">Send Message</button>
      </form>

      <div style={{marginTop: "30px"}}>
        <p>Email: bhagvansingh13745@gmail.com</p>
        <p>
          GitHub: 
          <a href="https://github.com/Bhagavansingh17" target="_blank" rel="noopener noreferrer">
            Bhagavansingh17
          </a>
        </p>
        <p>
          LinkedIn: 
          <a href="https://linkedin.com/in/bhagavan-singh-08b857295" target="_blank" rel="noopener noreferrer">
            Profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
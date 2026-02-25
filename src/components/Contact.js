import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
       <form>
        <input type="text" placeholder="Your Name" required /><br /><br />
        <input type="email" placeholder="Your Email" required /><br /><br />
        <textarea placeholder="Your Message" required></textarea><br /><br />
        <button type="submit">Send Message</button>
      </form>

      <p>Email: bhagvansingh13745@gmail.com</p>
      <p>GitHub: https://github.com/Bhagavansingh17</p>
      <p>LinkedIn: linkedin.com/in/bhagavan-singh-08b857295</p>
    </section>
  );
}

export default Contact;
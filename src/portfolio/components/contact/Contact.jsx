import './contact.css';
import React, { useRef, useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/anas.dev72@gmail.com',
        {
          method: 'POST',
          body: formData,
        },
      );

      const result = await response.json();

      if (result.success === 'true') {
        setStatus('Thanks, I’ll reply ASAP 🙂');
        formRef.current.reset();
      } else {
        setStatus('Something went wrong. Try again.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />

          <input type="email" placeholder="Your Email" name="email" required />

          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>

          {/* Optional hidden fields */}
          <input type="hidden" name="_captcha" value="false" />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {status && <span>{status}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

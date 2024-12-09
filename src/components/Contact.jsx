import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Tech Street, Digital City
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@tangitex.com
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <textarea 
              id="message" 
              required 
              value={formData.message}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

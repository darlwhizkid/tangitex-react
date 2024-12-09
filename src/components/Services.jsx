import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faPalette, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section id="services" className="services-grid">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <FontAwesomeIcon icon={faCode} />
          <h3>Web Development</h3>
          <p>Custom websites and web applications built with cutting-edge technologies.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faMobileAlt} />
          <h3>Mobile Development</h3>
          <p>Native and cross-platform mobile applications.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faPalette} />
          <h3>Graphics Design</h3>
          <p>Creative visual solutions for branding and digital media.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faHeadset} />
          <h3>Technical Support</h3>
          <p>24/7 IT support and maintenance services.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

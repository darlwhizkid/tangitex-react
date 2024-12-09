import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: '/assets/img/portfolio/portfolio-1.png',
      title: 'Dance Competition Website',
      description: 'Full-stack development with React and Node.js',
      client: 'Darlculus',
      url: 'https://imomotimireact.vercel.app/'
    },
    {
      image: '/assets/img/portfolio/portfolio-2.jpg',
      title: 'Music Artiste Website',
      description: 'Full-stack development with React and Node.Js',
      client: 'C.O.L.D Records',
      url: 'https://cold-records.vercel.app/'
    },
    {
      image: '/assets/img/portfolio/cloud.jpg',
      title: 'Cloud Migration Project',
      description: 'AWS cloud infrastructure implementation',
      client: '',
      url: ''
    }
  ];

  return (
    <section id="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.client && <p>Client: {item.client}</p>}
              {item.url && <p>URL: {item.url}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

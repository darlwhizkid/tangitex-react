import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  const teamMembers = [
    {
      name: 'James Ikediashi',
      role: 'CEO/Backend Developer',
      primaryImg: '/assets/img/team/team3.jpg',
      secondaryImg: '/assets/img/team/team3A.jpg',
      socials: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Ifeanyi Azuh',
      role: 'Technical Lead/FrontEnd Developer',
      primaryImg: '/assets/img/team/team3.jpg',
      secondaryImg: '/assets/img/team/team3A.jpg',
      socials: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Darlington Odom',
      role: 'Creative Lead/Frontend Developer',
      primaryImg: '/assets/img/team/team3.jpg',
      secondaryImg: '/assets/img/team/team3A.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/darlington-odom-818747a0/',
        facebook: 'https://web.facebook.com/darlwhizkid'
      }
    }
  ];
  return (
    <section id="team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="image-container">
              <img src={member.primaryImg} alt={member.name} className="primary-img"/>
              <img src={member.secondaryImg} alt={`${member.name} Fun Shot`} className="secondary-img"/>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              {member.socials.linkedin && (
                <a href={member.socials.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
              )}
              {member.socials.github && (
                <a href={member.socials.github}><FontAwesomeIcon icon={faGithub} /></a>
              )}
              {member.socials.facebook && (
                <a href={member.socials.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

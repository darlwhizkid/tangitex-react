import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <p>© 2024 Tangitex Technologies. All Rights Reserved.</p>
      {showScrollButton && (
        <button id="scroll-top" title="Scroll to Top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;

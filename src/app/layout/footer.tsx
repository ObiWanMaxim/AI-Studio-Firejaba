// components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer style={{ position: 'fixed', bottom: '0', right: '0', zIndex:'-1' }}>
      <a href="https://wivo.co.il" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/wivo.webp" 
          alt="Footer Image"
          style={{ width: '100px', height: 'auto' }} 
        />
      </a>
    </footer>
  );
}

export default Footer;

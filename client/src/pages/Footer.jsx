import React from 'react';

function Footer() {
  return (
    <footer className="footer fixed-bottom bg-dark text-white text-center py-1">
      © {new Date().getFullYear()} All rights reserved.
    </footer>
  );
}

export default Footer;

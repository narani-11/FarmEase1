import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} FarmEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/">FarmEase</Link>
        </div>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/consumer">Consumer</Link>
            </li>
            <li>
              <Link to="/farmer">Farmer</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={() => setOpen(!open)} aria-hidden>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;

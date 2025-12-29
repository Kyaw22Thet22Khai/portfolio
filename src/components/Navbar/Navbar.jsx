import React, { useState, useEffect } from "react";

// Navbar SCSS
import "./navbar.scss";

//Icons
import { FaPhone } from "react-icons/fa";

// Used Images
import KTKLogo from "../../assets/KTKLogo.png";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState(navItems[0].href);

  // Listen to scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      let current = navItems[0].href;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = item.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
      <div className="container">
        <span className="navbar-brand">
          <img src={KTKLogo} alt="KTK Logo" className="me-1 brand-logo" />
          <span className="brand-text">Kyaw Thet Khaing</span>
        </span>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a
                  className={`nav-link${
                    activeSection === item.href ? " active-nav" : ""
                  }`}
                  aria-current={
                    activeSection === item.href ? "page" : undefined
                  }
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="rounded-pill btn-rounded">
            +959799657056
            <span>
              <FaPhone className="fas fa-phone-alt" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

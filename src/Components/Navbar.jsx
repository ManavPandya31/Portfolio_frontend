import React, { useState, useEffect } from "react";
import "../css/navbar.css";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.pushState(null, null, " ");
    setMenuOpen(false);
  };


useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}, [darkMode]);


  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={scrollToHome}
        style={{ cursor: "pointer" }}
      >
        MP<span>.</span>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#education" onClick={() => setMenuOpen(false)}>
          Education
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>
        <a href="#certificates" onClick={() => setMenuOpen(false)}>
          Certificates
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <button className="hire-btn" onClick={scrollToContact}>
          Hire Me
        </button>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light ☀️" : "Dark 🌙"}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

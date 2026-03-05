import React from "react";
import "../css/home.css";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <section id="home" className="hero">
      <p className="hi-text">Hi, I'm</p>
      <h1 className="name">
        Manav <span>Pandya</span>
      </h1>
      <h2 className="title">MERN Stack Developer</h2>
      <p className="description">
        Building Scalable, User-Friendly Full-Stack Web Applications With
        MongoDB, Express.js, React.js & Node.js.
      </p>

      <div className="hero-btns">
        <button className="btn-cyan" onClick={() => scrollToSection("contact")}>
          Get In Touch
        </button>

        <button
          className="btn-outline"
          onClick={() => window.open("/Manav_Pandya_Resume.pdf", "_blank")}
        >
          View My Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;

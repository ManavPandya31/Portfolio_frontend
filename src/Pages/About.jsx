import React from "react";
import "../css/about.css";

const About = () => (
  <section id="about">
    {/* <span className="number-prefix">01.</span> */}
    <h2 className="section-heading">
      About <span>Me</span>
    </h2>
    <div className="about-grid">
      <div className="about-text">
        <p>
          I am a Passionate <b>MERN Stack Developer</b> With Hands-On Internship
          Experience In Building Full-Stack Web Applications..
        </p>
        <p>
          I Specialize in{" "}
          <span className="highlight">
            MongoDB, Express.js, React.js, and Node.js.
          </span>
        </p>
        <p>
          With a Solid Academic Background in Computer Applications and
          Practical Internship experience, I'm Eager To Contribute To Impactful
          Projects and Continue Growing as a Developer.
        </p>
      </div>
      <div className="about-info">
        <div className="info-box">
          <span>Name</span>
          <span>Manav Pandya</span>
        </div>
        <div className="info-box">
          <span>Experience</span>
          <span>3 Months Internship</span>
        </div>
        {/* <div className="info-box"><span>Education</span><span>BCA & MCA</span></div> */}
        <div className="info-box">
          <span>Location</span>
          <span>Ahemdabad , India</span>
        </div>
      </div>
    </div>
  </section>
);
export default About;

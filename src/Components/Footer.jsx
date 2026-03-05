import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaSnapchat } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import "../css/footer.css";

const Footer = () => (

  <footer className="footer">
    <div className="social-links">
      
      <a 
        href="https://github.com/ManavPandya31" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a 
        href="https://www.linkedin.com/in/manav-pandya-2628aa273/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

       <a 
        href="https://www.instagram.com/manavpandya31/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

        <a 
        href="https://www.snapchat.com/@manav_pandya31" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaSnapchat />
      </a>

      {/* <a href="manavpandya42@gmail.com">
        <MdEmail />
      </a> */}

    </div>

    <p>© 2026 Manav Pandya. All Rights Reserved.</p>
  </footer>
);

export default Footer;
import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "../css/experience.css";

const Experience = () => {
  return (
    <section id="experience">
      {/* <span className="number-prefix">04.</span> */}
      <h2 className="section-heading">Work <span>Experience</span></h2>
      
      <div className="experience-container">
        <div className="experience-card">
          
          <div className="accent-line"></div>
          
          <div className="experience-content">
            <div className="exp-header">
              <h3>MERN Stack Developer Intern</h3>
              
              <div className="exp-sub-details">
                <span className="exp-org">
                  <FaBuilding className="icon" /> WebTech Evolution
                </span>
                
                <span className="exp-loc">
                  <FaMapMarkerAlt className="icon" /> Ahmedabad
                </span>
                
                <span className="exp-duration">
                  <FaCalendarAlt className="icon" /> 3 Months
                </span>
              </div>
            </div>

            <ul className="exp-points">
              <li>Developed Full-Stack Features Using The MERN Stack</li>
              <li>Implemented Authentication & Authorization Using JWT Tokens</li>
              <li>Built and Maintained REST APIs For Various Application Modules</li>
              <li>Integrated Razorpay Payment Gateway For Soppzo</li>
            <li>
                <a 
                  href="/Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  Certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
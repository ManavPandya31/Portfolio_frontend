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
              <li>Developed full-stack features using the MERN stack</li>
              <li>Built and maintained REST APIs for various application modules</li>
              <li>Integrated Razorpay payment gateway for Soppzo</li>
              <li>Implemented authentication & authorization using JWT tokens</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
import React from "react";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import "../css/education.css";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-title">
        {/* <span className="number-prefix">02.</span> */}
        <h2>Education</h2>
      </div>

      <div className="education-container">
        <div className="education-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <div className="edu-content">
            <span className="edu-degree">MCA</span>
            <h3>Master of Computer Applications</h3>

            <p className="edu-university">Marwadi University (NAAC A+ Accredited )</p>

            <div className="edu-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>Rajkot, India</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="edu-icon">
            <MdMenuBook />
          </div>

          <div className="edu-content">
            <span className="edu-degree">BCA</span>
            <h3>Bachelor of Computer Applications</h3>

            <p className="edu-university">Sanskar Institute of Management & Information Technology</p>

            <div className="edu-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>Bhuj, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

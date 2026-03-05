import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../Slices/loaderSlice.js";
import "../css/connect.css";

const Contact = () => {

  const [formData, setFormData] = useState({name: "",email: "",message: "",});
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoader());
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      console.log("Response From Connect Api :-",res);
      
      alert("Message sent successfully");

      setFormData({name: "",email: "",message: "",});

    } catch (error) {
      alert("Something went wrong");
      console.log(error);

    } finally {
      dispatch(hideLoader());
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading" style={{ textAlign: "center" }}>
        Get In <span>Touch</span>
      </h2>

      <p className="contact-subtitle">
        I’m Open To Opportunities. Feel Free To Reach Out!
      </p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            <span className="send-icon">➤</span>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "../css/certificates.css";

const Certificates = () => {
  const certs = [
    {
      title: "Java Script Workshop",
      org: "dit interactive pvt ltd",
      link: "https://drive.google.com/file/d/1vkIj2BWeCWHpjtXm74r3PUi6NOw61rq3/preview",
    },
    {
      title: "Node.js",
      org: "infosys springboard",
      link: "https://drive.google.com/file/d/1FCNh4AmTl6oo50DvhBUzUQL-Hzlki1eF/preview",
    },
    {
      title: "Web Development with Node.js, MongoDB and Express",
      org: "infosys springboard",
      link: "https://drive.google.com/file/d/1ASfma5KCGRMJIu4qYNi3pOvdW7MAgWTz/preview",
    },
  ];

  return (
    <section id="certificates" className="section">
      <div className="section-title-container">
        {/* <span className="number-prefix">05.</span> */}
        <h2 className="section-heading">Certificates</h2>
      </div>

      <div className="certs-grid">
        {certs.map((cert, i) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            key={i}
          >
            <div className="cert-icon-container">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cert-svg"
              >
                <path d="M20 7h-9m3 3h-3m-3 3h3m-3 3h3M3 18V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-org">{cert.org}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

import React from "react";
import "../css/projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Meal Bridge",
      description:
        "A full-stack web application that reduces food waste by connecting food donors with NGOs.",
      features: [
        "User Authentication with JWT",
        "Role-based access (Admin, Donor, NGO)",
        "Food request tracking",
        "Admin approval system",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveLink: "https://mealbridge.netlify.app",
      // githubLink: "https://github.com/ManavPandya31/mealbridge",
    },
    {
      title: "Shoppzo",
      description:
        "A full-featured e-commerce platform with payment integration.",
      features: [
        "User login & registration",
        "Product Wishlists Management",
        "Cart & order management",
        "Razorpay payment integration",
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveLink: "https://shoppzo.netlify.app",
      // githubLink: "https://github.com/ManavPandya31/shoppzo",
    },
  ];

  return (
    <section id="projects">
      {/* <span className="number-prefix">03.</span> */}
      <h2 className="section-heading">
        Featured <span>Projects</span>
      </h2>
      <p style={{ color: "var(--text-dim)", marginBottom: "30px" }}>
        Some things I've built that I'm proud of.
      </p>

      <div className="projects-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <span className="stack-label">MERN Stack</span>
              <div className="project-links">
                {/* {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )} */}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <h4 className="features-title">Key Features</h4>
            <ul className="features-list">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

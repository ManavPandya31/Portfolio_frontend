import React from "react";
import "../css/skills.css";

const Skills = () => {
  const stacks = [
    {
      title: "FRONTEND",
      skills: ["ReactJS", "HTML", "CSS3"],
    },
    { 
      title: "BACKEND", 
      skills: ["NodeJS", "ExpressJS","NestJS","REST APIs", "JWT Authentication"], 
    },
    { 
      title: "Database", 
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Supabase" ],
    },
     { 
      title: "Tools & Technologies", 
      skills: ["Git & GitHub", "Postman" , "Netlify" , "Render" , "Vercel"],
    },
  ];

  return (
    <section id="skills">
      <h2 className="section-heading" style={{ textAlign: "center" }}>
        My <span>Tech Stack</span>
      </h2>
      <div className="skills-container">
        {stacks.map((stack) => (
          <div className="skill-card" key={stack.title}>
            <h3>{stack.title}</h3>
            <div className="tags">
              {stack.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

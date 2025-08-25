import React from "react";

function Portfolio({ projects }) {
  return (
    <div className="portfolio">
      {projects.map((p, index) => (
        <div key={index} className="project">
          <img src={p.img} alt={p.category} />
          <p>{p.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

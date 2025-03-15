import React from "react";
import "./works.css";

import ngo from "../../assets/ngo.jpg";
import yotubeClone from "../../assets/yotubeClone.jpg";
import recipe from "../../assets/recipe.jpg";
import grocery from "../../assets/grocery.jpg";

const projectData = [
  {
    image: ngo,
    alt: "NGO Website",
    link: "https://ecohimalayahub.vercel.app/",
  },
  {
    image: yotubeClone,
    alt: "YouTube Clone",
    link: "https://youtube-clone-phi-fawn.vercel.app",
  },
  {
    image: recipe,
    alt: "Recipe App",
    link: "https://my-recipe-dusky.vercel.app",
  },
  {
    image: grocery,
    alt: "Grocery App",
    link: "https://saumyaaaaa.github.io/grocery/",
  },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="works-title">My Projects</h2>
      <p className="works-desc">
        I am excited to share my projects from my learning journey.
      </p>
      <div className="works-grid">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <div className="card-image-container">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.alt}</h3>
                <p className="card-desc">Click to view project</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button className="works-btn">See More</button>
    </section>
  );
};

export default Works;

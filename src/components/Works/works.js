import React from "react";
import "./works.css";

import ngo from "../../assets/ngo.jpg";
import yotubeClone from "../../assets/yotubeClone.jpg";
import recipe from "../../assets/recipe.jpg";
import grocery from "../../assets/grocery.jpg";

const projectData = [
  { image: ngo, alt: "ngo website", link: "https://hiuchulinepal.vercel.app" },
  {
    image: yotubeClone,
    alt: "youtube",
    link: "https://youtube-clone-phi-fawn.vercel.app",
  },
  {
    image: recipe,
    alt: "recipe app",
    link: "https://my-recipe-dusky.vercel.app",
  },
  {
    image: grocery,
    alt: "grocery",
    link: "https://saumyaaaaa.github.io/grocery/",
  },

];

const Works = () => {
  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">
          I am excited to share  my projects  during my learning session.
        </span>
        <div className="worksCards">
          {projectData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cardLink"
            >
              <div className="card">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="cardImg"
                />
              </div>
            </a>
          ))}
        </div>
        <button className="worksBtn">See More</button>
      </section>
    </div>
  );
};

export default Works;

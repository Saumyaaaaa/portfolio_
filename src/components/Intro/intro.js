import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Saumya</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
         experience in creating visually
          appealing, responsive, and user-friendly websites. My expertise lies
          in leveraging modern technologies like React, TypeScript, and Node.js
          to build efficient web applications. I have a passion for clean,
          scalable code and a strong understanding of frontend design principles
          to enhance the user experience. Whether it's building single-page
          applications or managing complex backend systems, I focus on
          delivering high-quality, reliable solutions that meet client and user
          needs. Let's work together to bring your ideas to life!
        </p>
      </div>
      <div className="bgWrapper">
        <img src={bg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;

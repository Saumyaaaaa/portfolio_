import React, { useRef } from "react";
import "./contact.css";
import Reacts from "../../assets/react.png";
import JS from "../../assets/js.png";
import Type from "../../assets/typescript.png";
import Git from "../../assets/git.png";
import Node from "../../assets/node.png";
import Post from "../../assets/postmann.png";
import Docker from "../../assets/docker.png";
import Next from "../../assets/next.png";
import Database from "../../assets/database-storage.png";
import Html from "../../assets/html-5.png";
import Css from "../../assets/css-3.png";
import C from "../../assets/c-.png";
import Python from "../../assets/python.png";
import Java from "../../assets/java.png";
import TwitterIcon from "../../assets/twitter.png";
import LinkedInIcon from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";
import { FaGithub } from "react-icons/fa"; // Importing FaGithub icon
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll"; // Import Link for smooth navigation
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ki22thf", "template_p98k0xi", form.current, {
        publicKey: "WhQ9gVqHJML5V_qeD",
      })
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000, // 3 seconds
          });
          console.log("Email sent successfully:", result);
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000, // 3 seconds
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section id="contactPage">
        <div id="clients">
          <h1 className="contactPageTitle">Technologies</h1>
          <p className="clientDesc">Technologies I have been working with.</p>
          <div className="clientImgs">
            <div className="clientImgWrapper">
              {/* List of images */}
              <img src={Reacts} alt="React" className="clientImg" />
              <img src={JS} alt="JavaScript" className="clientImg" />
              <img src={Type} alt="TypeScript" className="clientImg" />
              <img src={Git} alt="Git" className="clientImg" />
              <img src={Node} alt="Node.js" className="clientImg" />
              <img src={Post} alt="Postman" className="clientImg" />
              <img src={Docker} alt="Docker" className="clientImg" />
              <img src={Next} alt="Next.js" className="clientImg" />
              <img src={Database} alt="Database" className="clientImg" />
              <img src={Html} alt="HTML" className="clientImg" />
              <img src={Css} alt="CSS" className="clientImg" />
              <img src={Java} alt="Java" className="clientImg" />
              <img src={Python} alt="Python" className="clientImg" />
              <img src={C} alt="C++" className="clientImg" />
              {/* Duplicate the images to make the marquee effect smoother */}
              <img src={Reacts} alt="React" className="clientImg" />
              <img src={JS} alt="JavaScript" className="clientImg" />
              <img src={Type} alt="TypeScript" className="clientImg" />
              <img src={Git} alt="Git" className="clientImg" />
              <img src={Node} alt="Node.js" className="clientImg" />
              <img src={Post} alt="Postman" className="clientImg" />
              <img src={Docker} alt="Docker" className="clientImg" />
              <img src={Next} alt="Next.js" className="clientImg" />
              <img src={Database} alt="Database" className="clientImg" />
              <img src={Html} alt="HTML" className="clientImg" />
              <img src={Css} alt="CSS" className="clientImg" />
              <img src={Java} alt="Java" className="clientImg" />
              <img src={Python} alt="Python" className="clientImg" />
              <img src={C} alt="C++" className="clientImg" />
            </div>
          </div>
        </div>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactPageDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <FaGithub
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://github.com/Saumyaaaaa")}
            />
            <img
              src={TwitterIcon}
              alt="Twitter"
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.twitter.com/saumya_neupane")
              }
            />
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/saumyaneupane")
              }
            />
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.instagram.com/saumya_neupane/")
              }
            />
          </div>
        </form>

        {/* Toast container to display success or error messages */}
        <ToastContainer />

        {/* Use Link to scroll back to the home section after form submission */}
        <Link
          to="intro" // ID of the home section
          smooth={true}
          duration={500}
          className="backToHome"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
};

export default Contact;

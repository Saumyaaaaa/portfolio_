import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import LinkedInIcon from '../../assets/linkedin.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

      emailjs
        .sendForm('service_ki22thf', 'template_p98k0xi', form.current, {
          publicKey: '71syBSKXNjnyjXW2E9yVL',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I am a member of the following  clients and have worked with them on various projects. If you would like to get in touch, feel free toHere are some of the clients I have had here.
            </p>
            <div className="clientImgs">
                <img src= {Walmart} alt="Client" className="clientImg" />
                <img src= {Adobe} alt="Client" className="clientImg" />
                <img src= {Microsoft} alt="Client" className="clientImg" />
                <img src= {Facebook} alt="Client" className="clientImg" />
            </div>
        </div>
        <div className="contact" id="contact"></div>
        <h className="contactPageTitle">Contact Me</h>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name'name='your_name' />
          <input type="email" className="email" placeholder='Your email' name='your_email' />
          <textarea name="message"  rows="5" placeholder='Your Message' className='msg'></textarea>
          <button  type='submit' value='send'
          className="submitBtn">Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" onClick={() => window.open('https://www.facebook.com/saumyaneupane')} />
            <img src={TwitterIcon} alt="Twitter" className="link" onClick={() => window.open('https://www.twitter.com/saumya_neupane')} />
            <img src={LinkedInIcon} alt="Youtube" className="link" onClick={() => window.open('https://www.linkedin.com/in/saumyaneupane')} />
            <img src={InstagramIcon} alt="Instagram" className="link" onClick={() => window.open('https://www.instagram.com/saumyaneupane')} />

          </div>

        </form>
      </section>
    </div>
  )
}

export default Contact

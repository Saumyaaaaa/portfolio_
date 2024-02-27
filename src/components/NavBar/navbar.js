import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
          <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Home</Link>
          <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
          <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Portfolio</Link>
        </div>
        <button className="desktopMenuBtn">
            <img   src={contactImg} alt="contact" className="desktopMenuImg" />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar

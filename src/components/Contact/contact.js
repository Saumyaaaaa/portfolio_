import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'

const Contact = () => {
  return (
    <div>
      <section className="contactPage">
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
        <div className="contact"></div>
      </section>
    </div>
  )
}

export default Contact

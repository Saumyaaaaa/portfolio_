import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id='skills'>
       <span className="skillTitle">What I do</span>
       <span className="skillDesc">I am skilled and passionate web designer with experience in creating user friendly websites.</span>
       <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design </h2>
            <p>As a UI/UX designer, I specialize in creating engaging and user-friendly digital interfaces, blending creativity with functionality to deliver exceptional user experiences.</p>
          </div>

        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>As a website designer, I specialize in crafting visually appealing and user-friendly websites that effectively communicate brand identity and engage visitors.</p>
          </div>

        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>As a designer, I create captivating and user-friendly apps that seamlessly blend aesthetics with functionality to enhance user experiences on various platforms.

</p>
          </div>

        </div>
       </div>
    </section>
  )
}

export default Skills

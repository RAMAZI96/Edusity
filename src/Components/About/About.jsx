import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
    <img src={about_img} alt="" className='about-img'/>
    <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>The colleges and halls</h2>
      <p>Each college is independent and self-governing,
         having a charter approved by the Privy Council,
          under which it is governed by a Head of House, 
          elected and appointed by the governing body directly.
           The governing body comprises a number of Fellows, 
           most of whom also hold University posts.</p>
      <p>The three societies – Kellogg College, Reuben 
        College and St Cross College – operate very much 
        like the other colleges but are considered departments
         of the University rather than independent colleges because,
          unlike the others, they do not have a royal charter. 
          One of the main differences is that the governing body
           recommends a president, who is then appointed by Council.</p>
           <p>Undergraduates are admitted to 32 of the colleges 
            and permanent private halls. All colleges accept 
            applications from mature students, while Harris 
            Manchester College is solely for mature students</p>
      </div>
    </div>
  )
}

export default About

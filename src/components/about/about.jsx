import React from 'react'
import './about.css'
import me from "../../assets/about_me.jpg"
import {BsBookHalf} from "react-icons/bs"
import {FaGraduationCap} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

const about = () => {
  return (
      <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image"/>
          </div> 
        </div>

        <div className="about__content">
          <div className="about__cards">
             <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>B Tech</h5>
              <small>CGPA: 8.98</small>
             </article>

             <article className='about__card'>
             <BsBookHalf className='about__icon'/>
             <h5>Intermediate</h5>
             <small>Result: 93.4%</small>
            </article> 
            
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>4+Completed</small>
           </article>
          </div>

          <p>
          Hi,I am devang mishra a Pre-final Year student at IIIT Ranchi pursuing Btech in Electronics and Communication Engineering.
          I love to solve problems on Data Structures & Algorithms and have interest in Web Development.I also do competitive programming.
          </p> 
          
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          

        </div>
      </div>
      </section>
  )
}

export default about
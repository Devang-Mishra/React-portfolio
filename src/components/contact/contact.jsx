import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_os3kjmj', 'template_966n0am', form.current, 'y3pjvdbTisykBjRTF')
    e.target.reset()
  }; 
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineMailOutline className='contact__option-icon'/>
              <h4>Email</h4> 
              <h5>Devangmishra285@gmail.com</h5>
              <a href="mailto:Devangmishra285@gmail.com" target="_blank">Send a message</a>    
          </article>
          <article className='contact__option'>
              <BsInstagram className='contact__option-icon'/>
              <h4>Instagram</h4> 
              <h5>_devangmishra</h5>
              <a href="https://www.instagram.com/_devangmishra/" target="_blank">Send a message</a>    
          </article>
          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4> 
              <h5>+91-95544 50994</h5>
              <a href="https://api.whatsapp.com/send?phone=+919554450994" target="_blank">Send a message</a>    
          </article>
        </div>
        {/* End of contact options*/}
        <form ref={form} onSubmit={sendEmail} >
          
        <input type="text" name='name' placeholder='Your Full Name'  required />
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message'  required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
       
        </form>
      </div>
    </section>
  )
}

export default Contact
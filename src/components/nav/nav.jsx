import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {RiServiceFill} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react'


const Nav = () => {
  const [actineNav,setActiveNav]= useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={actineNav === '#' ? 'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={actineNav === '#about' ? 'active':''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={actineNav === '#experience' ? 'active':''}><FiBook/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={actineNav === '#portfolio' ? 'active':''}><RiServiceFill/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={actineNav === '#contact' ? 'active' : ''}><IoMdContact/></a>
    </nav>
  )
}

export default Nav
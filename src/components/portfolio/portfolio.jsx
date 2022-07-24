import React from 'react'
import './portfolio.css'
import Drumkit from '../../assets/drumkit2.jpg'
import Dice from '../../assets/dice1.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className='container portfolio__container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
               <img src={Drumkit} alt=""/>
            </div>
            <h3>DrumKit</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/Devang-Mishra/Drum_Kit.git" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
               <img src={Dice} alt=""/>
            </div>
            <h3>Dice Game</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/Devang-Mishra/Dicee_Game.git" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
      </div>
    </section>
  )
}

export default portfolio
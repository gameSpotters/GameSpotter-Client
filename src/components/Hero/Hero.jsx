import React, { useState } from 'react'
import gameOne from "../../assets/gameOne.png"
import gameTwo from "../../assets/gameTwo.png"
import rope from "../../assets/rope.png"
import plaque from "../../assets/plaque.png"
import thumb from "../../assets/thumb.png"
import Login from '../../pages/Auth/Login/Login'
import "./Hero.css"

const Hero = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }


  return (
    <div className='Hero'>
      <h1>Explore Unlimited Games & Test</h1>
      <h4>Adventure</h4>
      <p>Welcome to Game Spotter - Where Your Next Gaming Adventure Begins</p>
      <button className='Hero-button' onClick={handleOpenModal}>GET STARTED</button>
      {isModalOpen && <Login onClose={handleCloseModal} />}
      <div className='--hero-content'>
        <div>
          <img src={gameOne} alt="game" />
        </div>
        <div>
          <img src={gameTwo} alt="game" />
        </div>
      </div>

      <div className='--Hero-Animation'>
        <div className='--Hero-first-Rope'>
          <img src={rope} alt="" />
        </div>

        <div className='--Hero-second-Rope'>
          <img src={rope} alt="" />
        </div>

        <div className='--Hero-shake'>
          <img className='shake' src={plaque} alt="" />
          <img className='thumb' src={thumb} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero
import React, { useState } from 'react';
import firstAward from "../../assets/first.avif"
import secondAward from "../../assets/second.jpg"
import thirdAward from "../../assets/third.avif"
import bayz from "../../assets/bayz.webp"
import ray from "../../assets/ray.jpg"
import anny from "../../assets/anny.webp"
import "./GameCreator.css"

const GameCreator = () => {

  const [statusText, setStatusText] = useState('Status');
  const [statusTwo, setStatusTwo] = useState('Status');
  const [statusThree, setStatusThree] = useState('Status');

  const handleMouseEnter = () => {
    setStatusText('Verify');
  };

  const handleMouseLeave = () => {
    setStatusText('Status');
  };

  // two

  const handleMouseEnterTwo = () => {
    setStatusTwo('Verify');
  };

  const handleMouseLeaveTwo = () => {
    setStatusTwo('Status');
  };

  // three

  const handleMouseEnterThree = () => {
    setStatusThree('Verify');
  };

  const handleMouseLeaveThree = () => {
    setStatusThree('Status');
  };



  return (
    <div>
      <h2 className='gameCreator'>Game<span className="fonts">S</span>potter Faces</h2>
      <h3 className='--gameCreator-week'>CREATOR OF THE WEEK</h3>
      <div className='GameCreator'>
        <div className='gameCreator-header'>
          {/* hhh */}
        </div>

        <div className='gameCreator-header-two'>
          <div className='gameCreator-one'>
            <div className='award'>
              <img src={secondAward} alt="" />
            </div>
            <img src={bayz} alt="" />
            <h2>Dev_Bayz</h2>
            <h3>Game Developer</h3>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {statusText}
            </button>
          </div>

          <div className='gameCreator-two'>
            <div className='award'>
              <img src={firstAward} alt="" />
            </div>
            <img src={ray} alt="" />
            <h2>T Rayhaan</h2>
            <h3>Game Tester</h3>
            <button
              onMouseEnter={handleMouseEnterTwo}
              onMouseLeave={handleMouseLeaveTwo}
            >
              {statusTwo}
            </button>
          </div>

          <div className='gameCreator-one'>
            <div className='award'>
              <img src={thirdAward} alt="" />
            </div>
            <img src={anny} alt="" />
            <h2>Big Fast</h2>
            <h3>Game Enthusiasts</h3>
            <button
              onMouseEnter={handleMouseEnterThree}
              onMouseLeave={handleMouseLeaveThree}
            >
              {statusThree}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCreator
import React from 'react'
import AvOne from "../../assets/avOne.jpg"
import AvTwo from "../../assets/avTwo.webp"
import AvThree from "../../assets/avThree.webp"
import AvFour from "../../assets/avFour.jpg"
import "./Available.css"

const Available = () => {
  return (
    <div className='Available'>
        <div className='--available-header'>
            <div className='--available-header-content'>
                <h2>Adventures Games</h2>
                <h3>Explore new adventure games, read reviews, and meet talented developers behind these exciting titles.</h3>
            </div>
            <div className='--available-header-image'>
                <img src={AvOne} alt="AvOne" />
                <img src={AvTwo} alt="AvTwo" />
                <img src={AvThree} alt="AvThree" />
                <img src={AvFour} alt="AvFour" />
            </div>
        </div>
    </div>
  )
}

export default Available
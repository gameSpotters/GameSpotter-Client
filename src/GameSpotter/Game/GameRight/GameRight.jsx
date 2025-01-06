import React, { useState, useEffect, useRef } from "react";
import { FcLike } from "react-icons/fc";
import gameAds from "../../../assets/adsVideo.mp4";
import { MdSwipeLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdSwipeRight } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import "./GameRight.css";

const GameRight = ({ singleGame }) => {

  const Meeting = () => toast.error("Currently on development!");


  const follow = () => alert("Currently on development!");
  const Request = () => alert("Currently on development!");

  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  const handlePrev = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };


  return (
    <div className="GameRight">

      <div className="--GameRight-header">
        <div className="--GameRight-headers">
          {singleGame.gameVideoAds ? (
            <video className="--GameRight-header-img" autoPlay controls onEnded={(e) => e.target.play()}>
              <source src={singleGame.gameVideoAds} type="video/mp4" />
            </video>
          ) : (
            <video className="--GameRight-header-img" src={gameAds} controls autoPlay onEnded={(e) => e.target.play()}></video>
          )}

          <div className="--GameRight-description">
            <h1><FcLike /></h1>
            <div className="gameRight-follow">
              <h2>{singleGame.title}</h2>
              <button onClick={follow}>Follow</button>
              <Toaster />
            </div>
            <h2 className="--game-description-color">Game Description</h2>
            <p>{singleGame.description}</p>
            <div className="gameRight-feedback">
              <Link to="/gameReview">
                <button className="gameRight-feedback-one">Send Feedback</button>
              </Link>
              <Link to="/gameReview">
                <button className="gameRight-feedback-two">View Feedback</button>
              </Link>
            </div>
          </div>


        </div>
        <div className="GameRight-suv">

          <div className="--gameRights-display">
            <div className="--GameMiddle-meet">
              <h2>Developer</h2>
              <h2 className="--GameMiddle-developer">Discussion</h2>
            </div>
          </div>

          <div className="--GameMiddle-form --gameRight-display">
            <form action="">
              <input type="date" required /> <br />
              <button type="submit" onClick={Meeting}>Schedule a Meeting</button>
              <Toaster />
            </form>
          </div>

          <div className="gameMiddle-test --gameRights-displays">
            <h2>Note</h2>
            <p>
              If the game requires testing, testers are encouraged to explore and provide
              valuable feedback. If you're interested in contributing to the game's development,
              feel free to submit a request to become a game tester.
            </p>
          </div>


          <div className="--GameRight-testGame">
            <div className="--GameRight-testGame-header">
              <h2>Test Game</h2>
              <div className="--GameRight-flex">
                <button onClick={Request}>Request</button>
                <h1>$0.0</h1>
              </div>
            </div>
          </div>

          <div className="--gameRights-display">
            <h2 className="--gameRights-display-h2">Spotter Wallet</h2>
            <div className='gameMiddle-spotter-wallet'>
              <h3>Adresss</h3>
              <h3><span>0x(Soon)</span></h3>
            </div>
          </div>

          <div className="--GameRight-Additional">
            <h2>Game Additional Information</h2>
            <div className="--GameRight-Additional-header">
              <p>Enhance Your Experience: The Additional Game Screenshots section on GameSpotter provides a visual glimpse into the game will help you to Visualize Gameplay and Explore Environments.</p>
            </div>
          </div>

          <div className="--GameRight-Additional-header-image" ref={sliderRef}>
            <img src={singleGame.additionalGameOne} alt="" />
            <img src={singleGame.additionalGameTwo} alt="" />
          </div>

          <div className="slider-controls">
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>

          <h1 className="--GameRight-swipe">SWIPE < MdSwipeLeft /> ----------- < MdSwipeRight /> </h1>
        </div>
      </div>
    </div>
  );
};

export default GameRight;


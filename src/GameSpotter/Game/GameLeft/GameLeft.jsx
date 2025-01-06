import React from "react";
import DefaultImage from "../../../assets/DefaultImage.webp";
import play from "../../../assets/play.png";
import apple from "../../../assets/apple.png";
import { MdRocketLaunch } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { FaInbox } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { FaHornbill } from "react-icons/fa6";
import "./GameLeft.css";

const GameLeft = ({ singleGame }) => {

  const Launchs = () => alert("No current pre launch game!");
  const Template = () => toast.error("Game template currently not available!");
  const Inbox = () => toast.error("You did not have any message yet!");
  const Events = () => toast.error("No current events available!");
  const Billing = () => toast.error("You did not have any invoice yet!");
  const Marketing = () => toast.error("Currently not available!");




  return (
    <div className="GameLeft">
      <h1>Hi, Welcome</h1>
      <div className="GameLeft-header">
        {singleGame.owner?.image ? (
          <img className="GameLeft-header-img" src={singleGame.owner.image} alt={singleGame.owner.image} />
        ) : (
          <img className="GameLeft-header-img" src={DefaultImage} alt="Developer" />
        )}
        <h2 className="gameleft-dev">Developer</h2>
        <h3>{singleGame.owner?.username || 'Unknown Developer'}</h3>
        <h2>0 Followers</h2>
        <hr className="GameLeft-header-hr" />
        <div className="GameLeft-download">
          <h2>Available On</h2>
          <img className="GameLeft-download-one" src={play} alt="playstore" />
          <img className="GameLeft-download-two" src={apple} alt="applestore" />
        </div>
        <hr className="GameLeft-header-hr" />
        <div className='--SideDashBoard-devMode'>
          <h2>Developer Mode</h2>

          <div>
            <div className='--SideDashBoard-devMode-mode'>
              <MdRocketLaunch />
              <h3 onClick={Launchs}>Pre Launch</h3>
            </div>
            <div className='--SideDashBoard-devMode-mode'>
              <FaGamepad />
              <h3 onClick={Template}>Template</h3>
            </div>
            <div className='--SideDashBoard-devMode-mode'>
              <FaInbox />
              <h3 onClick={Inbox}>Inbox</h3>
            </div>
            <div className='--SideDashBoard-devMode-mode'>
              <MdRocketLaunch />
              <h3 onClick={Marketing}>Marketing</h3>
            </div>
            <div className='--SideDashBoard-devMode-mode'>
              <SiCoinmarketcap />
              <h3 onClick={Events}>Events</h3>
            </div>
            <div className='--SideDashBoard-devMode-mode'>
              <FaHornbill />
              <h3 onClick={Billing}>Billing</h3>
            </div>
            <Toaster />
          </div>

          <hr className="--GameLeft-rating-hr" />
          <div className="--GameLeft-Rating-Review">
            <h2>Rating & Review</h2>

            <h3>Star</h3>

            <div className="--GameLeft-rating-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <Link to="/gameReview">
              <button>Check Comment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLeft;

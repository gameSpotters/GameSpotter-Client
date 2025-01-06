import React, { useState, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import DefaultImage from "../../../assets/DefaultImage.webp"
import { MdRocketLaunch } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { FaHornbill } from "react-icons/fa6";
import "./SideDashBoard.css"
import toast, { Toaster } from 'react-hot-toast';


const SideDashBoard = () => {

  const { user, setUser, uploadImage } = useContext(UserContext);

  const Launch = () => toast.error("No current pre launch game!");
  const Template = () => toast.error("Game template currently not available!");
  const Inbox = () => toast.error("You did not have any message yet!");
  const Events = () => toast.error("No current events available!");
  const Billing = () => toast.error("You did not have any invoice yet!");
  const Marketing = () => toast.error("Currently not available!");

  return (
    <div className='SideDashBoard'>
      <div className='SideDashBoard-header'>
        <h1>GameMart</h1>
        <p>Discover everything you need to start <br /> playing games.</p>
        <input type="text" placeholder='Active Soon...' />
      </div>
      <div className='SideDashBoard-content'>
        <h2>Developers</h2>
        <div className='SideDashBoard-developers'>
          <img
            src={user.image || DefaultImage}
            alt="User Avatar"
          />
          <h3>Hi, {user.username}</h3>
        </div>
      </div>
      <div className='--SideDashBoard-review'>
        <hr />
        <h2>Game Review</h2>
        <Link to="/gameReview">
          <button>Explore</button>
        </Link>
      </div>

      <hr className='--SideDashBoard-hr'/>

      <div className='--SideDashBoard-devMode'>
        <h2>Developer Mode</h2>

        <div>
          <div className='--SideDashBoard-devMode-mode'>
            <MdRocketLaunch />
            <h3 onClick={Launch}>Pre Launch</h3>
          </div>
          <div className='--SideDashBoard-devMode-mode'>
            <FaGamepad />
            <h3 onClick={Template}>Game Template</h3>
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

        <div className='--SideDashBoard-Dev-connect'>
          <hr />
          <h2>Devs Connect</h2>

          <div className='--SideDashBoard-Dev-connect-section'>
            {/* <IoChatbubbleEllipsesOutline size={40} style={{ marginTop: '20px' }} /> */}
            <button>Chat</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideDashBoard
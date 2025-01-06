import React from 'react';
import metamask from "../../../assets/metamask.png";
import Trust from "../../../assets/trust.jpeg";
import ConnetWallet from "../../../assets/connect.png";
import CoinBase from "../../../assets/coinbase.jpeg";
import Binance from "../../../assets/binance.png";
import toast, { Toaster } from 'react-hot-toast';
import "./GameMiddle.css";

const GameMiddle = ({ singleGame }) => {

  const Meeting = () => toast.error("Currently on development!");

  return (
    <div className="GameMiddle">
      <div className="--GameMiddle-header">
        <div className="--GameMiddle-meet">
          <h2>Developer</h2>
          <h2 className="--GameMiddle-developer">Discussion</h2>
        </div>
        <div className="--GameMiddle-form">
          <form action="">
            <input type="date" required /> <br />
            <button type="submit" onClick={Meeting}>Schedule a Meeting</button>
            <Toaster/>
          </form>
        </div>
      </div>
      <div className="gameMiddle-test">
        <h2>Note</h2>
        <p>
          If the game requires testing, testers are encouraged to explore and provide
          valuable feedback. If you're interested in contributing to the game's development,
          feel free to submit a request to become a game tester.
        </p>
      </div>

      <hr />

      <div className="gameMiddle-connect-header">
        <h3 className="--gameMiddle-wallet-connect">Connect Wallet</h3>
        <div className='gameMiddle-connect'>
          <button>
            <img src={metamask} alt="metamask" />
            <h3>Metamask</h3>
          </button>
        </div>
        <div className='gameMiddle-connect'>
          <button>
            <img src={Trust} alt="Trust" />
            <h3>Trust Wallet</h3>
          </button>
        </div>
        <div className='gameMiddle-connect'>
          <button>
            <img src={ConnetWallet} alt="ConnetWallet" />
            <h3>ConnetWallet</h3>
          </button>
        </div>
        <div className='gameMiddle-connect'>
          <button>
            <img src={CoinBase} alt="CoinBase" />
            <h3>CoinBase(W)</h3>
          </button>
        </div>
        <div className='gameMiddle-connect'>
          <button>
            <img src={Binance} alt="Binance" />
            <h3>Binance(W)</h3>
          </button>
        </div>
      </div>
      <hr />

      <div className='--gameMiddle-wallet-section'>
        <h2>Spotter Wallet</h2>
        <div className='gameMiddle-spotter-wallet'>
          <h3>Adresss</h3>
          <h3><span>0x(Soon)</span></h3>
        </div>
        <p>
          GameSpotter is a comprehensive platform that brings together game developers,
          testers, and gaming enthusiasts. At the heart of this ecosystem is the GameSpotter Wallet,
          a feature designed to simplify and secure all payment transactions within the platform,
          ensuring a seamless experience for all users
        </p>

        <h2>Features of the GameSpotter(W)</h2>

        <ol>
          <li> 1. Web3 Integration for Easy Transactions</li>
          <li>2. Income for Testers</li>
          <li>3. Developer Monetization</li>
          <li>4. User-Friendly and Secure</li>
          <li>5. Versatile and Transparent</li>
        </ol>
      </div>
      <div>
      </div>
    </div>
  );
};

export default GameMiddle;

import React from 'react'
import Ai from "../../assets/Ai.jpg";
import Dev from "../../assets/Dev.jpg";
import Ultgames from "../../assets/Ultgames.avif";
import welcome from "../../assets/welcome.png"
import toast, { Toaster } from 'react-hot-toast';
import "./Information.css"

const Information = () => {

  const Home = () => toast.success("Hello! Gamer Kindly login");
  

  return (
    <div className='Information'>
      <div className='Information-Mission'>
        <h2>Our Mission</h2>
      </div>

      <div className='Information-Welcome'>
        <img src={welcome} alt="" />
      </div>

      <div className='Information-First'>
        <div className='Information-First-Header'>
          <hr />
          <h2>Join Us Today & Start Your <br /> AI Gaming Journey</h2>
          <p>Explore, and shape the future of AI gaming—starting small but dreaming big<br /> our platform connects you to a world of innovation and endless possibilities.</p>
          <button onClick={Home}>Join Us</button>
          <Toaster />
        </div>
        <div className='Information-Second-Header'>
          <img src={Ai} alt="Ai" />
        </div>
      </div>

      <div className='Information-Second'>
        <div className='Information-Second-Header'>
          <img src={Dev} alt="Dev" />
        </div>
          <div className='Information-First-Header'>
            <h2>Meet Game Developers & <br /> Interact Live!!</h2>
            <p>Connect directly with game developers, and engage in live interactions<br />Discover the stories behind your favorite games</p>
            <button onClick={Home}>Connect</button>
          </div>
        </div>

        <div className='Information-Third'>
          <div className='Information-First-Header'>
            <h2>Explore Our Marketplace <br /> With 2000+ Games</h2>
            <p>Discover a vast collection of unlimited games and find <br /> your next adventure, whether you're into action, strategy, or indie gems!</p>
            <button onClick={Home}>Explore</button>
          </div>
          <div className='Information-Second-Header'>
            <img src={Ultgames} alt="" />
          </div>
        </div>

    </div>
  )
}

export default Information
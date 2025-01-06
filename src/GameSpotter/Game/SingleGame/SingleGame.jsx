import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserNav from '../../../components/Navbar/UserNav';
import GameLeft from '../GameLeft/GameLeft';
import GameMiddle from '../GameMiddle/GameMiddle';
import GameRight from '../GameRight/GameRight';
import Footer from '../../../components/Footer/Footer';
import { getSingleGame } from '../../../api/getSingleGame';
import "./SingleGame.css";

const SingleGame = () => {
  const [singleGame, setSingleGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); 

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getSingleGame(id);
        setSingleGame(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadProfile();
  }, [id]);

  if (loading) return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="spinner-inner"></div>
      <div className="text">Loading...</div>
    </div>
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="GameDashBoard-container">
      <UserNav />
      <div className="SingleGame">
        <div id="GameLeft">
          <GameLeft singleGame={singleGame} />
          <div className="vl"></div>
        </div>
        <div id="GameMiddle">
          <GameMiddle singleGame={singleGame} />
        </div>
        <div id="GameRight">
          <GameRight singleGame={singleGame} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleGame;

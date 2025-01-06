import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchGames } from '../../../api/game';
import gameLoading from "../../../assets/gads.gif"
import DefaultImage from "../../../assets/DefaultImage.webp"
import apple from "../../../assets/apple.png"
import play from "../../../assets/play.png"
import './MainDashBoard.css';

const MainDashBoard = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const truncateDescription = (description) => {
    return description.length > 50 ? `${description.slice(0, 50)}...` : description;
  };

  return (
    <div className="MainDashBoard">
      <div className='--MainDashBoard-GameMart'>
        <h1 className='m-head'>GameMart</h1>
      </div>
      <div className="MainDashBoard-header"></div>
      <div className="MainDashBoard-content">
        <hr className='MainDashBoard-content-hr' />
        <h2 className='MainDashBoard-content-discover'>Discover the Best Games Today</h2>
        <div className="MainDashBoard-games">
          {loading ? (
            <div className='MainDashBoard-games-loading'>
              <img src={gameLoading} alt="" />
            </div>
          ) : games.length > 0 ? (
            games.map((game) => (
              <div className="MainDashBoard-games-content" key={game._id}>
                <Link to={`/singleGame/${game._id}`}>
                  <img className='MainDashBoard-games-content-img' src={game.image} alt={game.title} />
                </Link>
                <h3>{game.title}</h3>
                <p>{truncateDescription(game.description)}, more...</p>
                <hr className='mainDash-hr' />
                <h3>Developer</h3>
                <div className="MainDashBoard-developers">
                  {game.owner?.image ? (
                    <img src={game.owner.image} alt={game.owner.name} />
                  ) : (
                    <img src={DefaultImage} alt="Developer" />
                  )}
                  <h3>{game.owner?.username || 'Unknown Developer'}</h3>
                </div>
                <p>Available On</p>
                <div className="MainDashBoard-apple-play">
                  {game.appleStoreLink && (
                    <a href={game.appleStoreLink} target="_blank" rel="noopener noreferrer">
                      <img className='MainDashBoard-apple-play-one' src={apple} alt="Apple Store" />
                    </a>
                  )}
                  {game.playStoreLink && (
                    <a href={game.playStoreLink} target="_blank" rel="noopener noreferrer">
                      <img className='MainDashBoard-apple-play-two' src={play} alt="Google Play" />
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No games available at the moment.</p>
          )}
        </div>
        <div className='MainDashBoard--SideDashBoard-review'>
          <hr />
          <h2>Game Review</h2>
          <Link to="/gameReview">
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainDashBoard;

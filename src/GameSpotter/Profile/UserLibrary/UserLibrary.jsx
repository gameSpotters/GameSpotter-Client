import React, { useState, useEffect } from 'react';
import Footer from '../../../components/Footer/Footer';
import { GiEmptyHourglass } from 'react-icons/gi';
import { fetchGames, addGame } from '../../../api/games';
import { IoMdCloseCircle } from "react-icons/io";
import './UserLibrary.css';
import apple from "../../../assets/apple.png";
import play from "../../../assets/play.png";
import UserNav from '../../../components/Navbar/UserNav';
import toast, { Toaster } from 'react-hot-toast';

const Modal = ({ isOpen, onClose, onGameAdded }) => {
  const initialFormData = {
    image: '',
    title: '',
    description: '',
    appleStoreLink: '',
    playStoreLink: '',
    gameVideoAds: '',
    additionalGameOne: '',
    additionalGameTwo: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); 

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (['image', 'gameVideoAds', 'additionalGameOne', 'additionalGameTwo'].includes(name) && files.length > 0) {
      const file = files[0];
      if (name === 'gameVideoAds' && file.size > 5 * 1024 * 1024) { // Check for file size greater than 5 MB
        toast.error('Video file size must be 5 MB or less.');
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, [name]: reader.result }));
      };
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check for textarea character limit
    if (formData.description.length > 200) {
      toast.error('Description cannot exceed 200 characters.');
      return;
    }

    setLoading(true);
    try {
      await addGame(formData);
      toast.success('Game added successfully!'); 
      onGameAdded();
      handleClose(); 
    } catch (error) {
      toast.error(`Error adding game: ${error.message}`); 
      console.error('Error adding game:', error.message);  
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 1 && (!formData.image || !formData.title)) {
      toast.error('Please fill out all fields');
      return;
    } else if (step === 2 && (!formData.description || !formData.gameVideoAds)) {
      toast.error('Please fill out all fields');
      return;
    } else if (step === 3 && (!formData.playStoreLink || !formData.appleStoreLink)) {
      toast.error('Please fill out all fields');
      return;
    } else if (step === 4 && (!formData.additionalGameOne || !formData.additionalGameTwo)) {
      toast.error('Please fill out all fields');
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleClose = () => {
    setFormData(initialFormData); 
    setStep(1); 
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="UserLibrary-modal-overlay">
      <div className="UserLibrary-modal">
        <button className="UserLibrary-close-button" onClick={handleClose}><IoMdCloseCircle /></button>
        <h2 className='--UserLibrary-launch'>Launch a New Game</h2>
        <form className="add-game-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="step">
              <label>
                <h2>Game Image</h2>
                <input type="file" name="image" onChange={handleChange} required />
              </label>
              <label>
                <h2>Game Title</h2>
                <input type="text" name="title" placeholder="Enter game title" value={formData.title} onChange={handleChange} required />
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="step">
              <label>
                <h2>Game Description</h2>
                <textarea maxLength="200" name="description" placeholder="Enter game description" value={formData.description} onChange={handleChange} required></textarea>
              </label>
              <label>
                <h2>Game Video Ads</h2>
                <input type="file" name="gameVideoAds" onChange={handleChange} required />
                <p className='video-megabyte'>Video should be a maximum of (5) megabytes</p>
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="step UserLibrary-links">
              <label>
                <h2>Play Store Link</h2>
                <input type="text" name="playStoreLink" placeholder="Enter Play Store link" value={formData.playStoreLink} onChange={handleChange} required />
              </label>
              <label>
                <h2>Apple Store Link</h2>
                <input type="text" name="appleStoreLink" placeholder="Enter Apple Store link" value={formData.appleStoreLink} onChange={handleChange} required />
              </label>
            </div>
          )}

          {step === 4 && (
            <div className="step">
              <label>
                <h2>Additional Game</h2>
                <input type="file" name="additionalGameOne" onChange={handleChange} required />
              </label>
              <label>
                <h2>Additional Game Two</h2>
                <input type="file" name="additionalGameTwo" onChange={handleChange} required />
              </label>
            </div>
          )}

          <div className="form-navigation">
            {step > 1 && <button type="button" className='Back-button' onClick={handleBack}>Back</button>}
            {step < 4 && <button type="button" className='Next-button' onClick={handleNext}>Next</button>}
            {step === 4 && (
              <button type="submit" disabled={loading} className='Submit-button'>
                {loading ? 'Launching...' : 'Launch Game'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const UserLibrary = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGamesData = async () => {
    try {
      const gamesData = await fetchGames();
      setGames(gamesData);
    } catch (error) {
      toast.error(`Error fetching games: ${error.message}`); 
      console.error('Error fetching games:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGamesData();
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const updateGames = async () => {
    await fetchGamesData();
  };

  if (loading) return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="spinner-inner"></div>
      <div className="text">Loading...</div>
    </div>
  );

  return (
    <div className='UserLibrary'>
      <Toaster />
      <UserNav />
      <div className='UserLibrary-header'>
        <h1>My Library</h1>
        <div className='UserLibrary-header-games'>
          <h2>All Games</h2>
          <p>Welcome to GameSpotter! All your games will be showcased here, ready for you to explore.</p>
        </div>

        {games.length > 0 ? (
          <div className='UserLibrary-games'>
            {games.map((game) => (
              <div key={game._id} className='UserLibrary-games-content'>
                <img className='UserLibrary-games-content-img' src={game.image} alt={game.title} />
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <p>Available On</p>
                <div className='UserLibrary-apple-play'>
                  {game.appleStoreLink && <img className='UserLibrary-apple-play-one' src={apple} alt="Apple Store" />}
                  {game.playStoreLink && <img className='UserLibrary-apple-play-two' src={play} alt="Play Store" />}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='UserLibrary-information'>
            <GiEmptyHourglass size={50} />
            <h2>Aww, shucks. Nothing here yet</h2>
            <p>Looks like you don't have any game yet. Get started with the button below!</p>
          </div>
        )}

        <button className='add-games-button' onClick={openModal}>Launch a New Game</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} onGameAdded={updateGames} />
      <Footer />
    </div>
  );
};

export default UserLibrary;

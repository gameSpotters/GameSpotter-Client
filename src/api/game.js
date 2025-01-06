import axios from 'axios';

const API_URL = 'https://gamedata-h9h3.onrender.com/api/game'; 

// Function to fetch all games
export const fetchGames = async () => {
  try {
    const response = await axios.get(API_URL); 
    return response.data; 
  } catch (error) {
    throw new Error('Error fetching games: ' + error.message);
  }
};

// Function to add a new game
export const addGame = async (gameData) => {
  try {
    const token = localStorage.getItem('token'); 
    const response = await axios.post(API_URL, gameData, {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error adding game:', error.message);
    throw new Error('Error adding game: ' + error.message);
  }
};

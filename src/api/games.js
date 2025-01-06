import axios from 'axios';

const API_URL = 'https://gamedata-h9h3.onrender.com/api/games'; 

// Function to fetch all games for the authenticated user
export const fetchGames = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data; 
  } catch (error) {
    throw new Error('Error fetching games: ' + error.message);
  }
};


// allgames


export const fetchAllGames = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error.message);
    throw error;
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

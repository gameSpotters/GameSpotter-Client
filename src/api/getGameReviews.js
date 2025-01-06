import axios from 'axios';

export const getGameReviews = async (gameId) => {
  try {
    const response = await axios.get(`https://gamedata-h9h3.onrender.com/api/reviews/${gameId}/reviews`);
    return response.data; // Assuming the response contains the reviews array
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

import axios from "axios";

export const getSingleGame = async (id) => {
  try {
    const response = await axios.get(`https://gamedata-h9h3.onrender.com/api/getSingleGame/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : "Error fetching profile");
  }
};

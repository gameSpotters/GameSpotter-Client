import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data
  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('/api/auth/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Upload image
  const uploadImage = async (token, image) => {
    try {
      const response = await axios.post('https://gamedata-h9h3.onrender.com/api/user/upload',
        { image, userId: user._id }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const updatedUser = { ...user, image: response.data.imageUrl };
      setUser(updatedUser);
      return response;
    } catch (error) {
      console.error('Error uploading image:', error.response?.data || error.message);
      throw error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, []);



  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, []);




  return (
    <UserContext.Provider value={{ user, loading, setUser, uploadImage, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;


import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const MainComponent = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true); 
  const [isModalVisible, setIsModalVisible] = useState(true); 

  const handleSwitchToRegister = () => {
    setIsLoginVisible(false);
  };

  const handleSwitchToLogin = () => {
    setIsLoginVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); 
  };

  return (
    <>
      {isModalVisible && (
        isLoginVisible ? (
          <Login onClose={handleCloseModal} onSwitchToRegister={handleSwitchToRegister} />
        ) : (
          <Register onClose={handleCloseModal} onSwitchToLogin={handleSwitchToLogin} />
        )
      )}
    </>
  );
};

export default MainComponent;

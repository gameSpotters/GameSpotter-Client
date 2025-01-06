import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedin, FaXTwitter, FaEye, FaEyeSlash } from "react-icons/fa6"; 
import axios from 'axios';
import UserContext from '../../../context/UserContext';
import NotificationModal from '../../NotificationModal/NotificationModal';
import './Login.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showRegister, setShowRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); 
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleCloseNotification = () => {
    setErrorMessage('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://gamedata-h9h3.onrender.com/api/auth/login', { email, password });
      console.log('Login successful', response.data);

      const { token } = response.data;
      localStorage.setItem('token', token);

      const userResponse = await axios.get('https://gamedata-h9h3.onrender.com/api/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(userResponse.data);
      navigate('/gameMart');
    } catch (error) {
      console.error('Error logging in', error);
      setErrorMessage('Username and password do not match. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='--model-content-flex'>
          <h2>Game<span className="font">S</span>potter</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className='--modal-content-header'>
          <h2>Welcome Back</h2>
          <h3>Not a member? <span onClick={handleOpenRegister} style={{ cursor: 'pointer', color: '#f1a32a' }}>REGISTER</span></h3>
        </div>
        <div className='--modal-form'>
          <form className='label' onSubmit={handleLogin}>
            <h5 className='emailpasswprd' htmlFor="email">Email Address</h5> <br />
            <input type="text" placeholder='Registered email address' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
            <h5 className='password' htmlFor="password">Password</h5> <br />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </span>
            </div>
            <button className='--modal-form-button' type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'} 
            </button>

            <h3 className='--modal-form-h3'>LOGIN WITH OTHER WAYS</h3>

            <div className='--modal-content-icons'>
              <FcGoogle />
              <FaFacebookF />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </form>
        </div>
      </div>
      {showRegister && <Register onClose={handleCloseRegister} />}
      {errorMessage && <NotificationModal message={errorMessage} onClose={handleCloseNotification} />}
    </div>
  );
};

export default Login;

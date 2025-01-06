import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import axios from 'axios';
import Login from '../Login/Login';
import './Register.css';

const Register = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const [showLogin, setShowLogin] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://gamedata-h9h3.onrender.com/api/auth/register', {
        email,
        username,
        password,
      });
      console.log('Registration successful', response.data);

      setShowSuccessModal(true);

      setTimeout(() => {
        setShowSuccessModal(false);
        handleOpenLogin();
      }, 2000);
    } catch (error) {
      console.error('Error registering', error);
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-modal">
      <div className="register-modal-content">
        <div className='register--model-content-flex'>
          <h2>Game<span className="font">S</span>potter</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className='register--modal-content-header'>
          <h2>Create Account</h2>
          <h3>Already a member? <span onClick={handleOpenLogin} style={{ cursor: 'pointer', color: '#f1a32a' }}>LOGIN</span></h3>
        </div>
        <div className='register--modal-form'>
          <form className='label' onSubmit={handleRegister}>
            <label className='label' htmlFor="email">Email Address</label> <br />
            <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required/> <br />
            <label className='label' htmlFor="username">Username</label> <br />
            <input type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} required/> <br />

            <label htmlFor="password">Password</label> <br />
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Create a password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            
            <label htmlFor="confirmPassword">Confirm Password</label> <br />
            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <p className="error-message">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Create Account'}
            </button>

            <h3 className='--modal-form-h3'>REGISTER WITH OTHER WAYS</h3>

            <div className='register--modal-content-icons'>
              <FcGoogle />
              <FaFacebookF />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </form>
        </div>
      </div>
      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <h2>Registration Successful!</h2>
            <p>Redirecting to login...</p>
          </div>
        </div>
      )}
      {showLogin && <Login onClose={handleCloseLogin} />}
    </div>
  );
};

export default Register;

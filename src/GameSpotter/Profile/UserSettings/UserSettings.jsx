import React, { useState, useContext } from 'react';
import './UserSettings.css';
import Footer from '../../../components/Footer/Footer';
import UserContext from '../../../context/UserContext';
import UserNav from '../../../components/Navbar/UserNav';
import DefaultImage from "../../../assets/DefaultImage.webp"

const UserSettings = () => {
  const [selectedSection, setSelectedSection] = useState('profile');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const { user, setUser, uploadImage } = useContext(UserContext);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    const token = localStorage.getItem('token');
    if (token && file) {
      try {
        const response = await uploadImage(token, file);
        if (response) {
          setMessage('Image uploaded successfully!');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        setMessage('Failed to upload image.');
      }
    }
  };

  const renderContent = () => {
    if (!user) {
      return <p>Please log in to view your settings.</p>;
    }

    switch (selectedSection) {
      case 'profile':
        return (
          <div className='UserSettings-content'>
            <div className='UserSettings-profile'>
              <img
                src={user.image || DefaultImage}
                alt="User Avatar"
              />
              <h3>Hi, {user.username}</h3>
              <button>{user.username}</button>
              <h3>Email</h3>
              <button>{user.email}</button>
              <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload Image</button>
              </div>
              {message && <p className="UserSettings-message">{message}</p>}
            </div>
          </div>
        );
      case 'changePassword':
        return <div className='UserSettings-content'>Change Password Currently Not Available</div>;
      case 'editProfile':
        return <div className='UserSettings-content'>Edit Profile Currently Not Available</div>;
      case 'account':
        return (
          <div className='UserSettings-content'>
            <div className='UserSettings-account'>
              <button>Delete Account</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='UserSettings'>
      <UserNav />
      <div className='UserSettings-headers'>
        <h1>My Settings</h1>
        <div className='UserSettings-sections'>
          <h3
            onClick={() => setSelectedSection('profile')}
            className={selectedSection === 'profile' ? 'selected' : ''}
          >
            Profile
          </h3>
          <h3
            onClick={() => setSelectedSection('changePassword')}
            className={selectedSection === 'changePassword' ? 'selected' : ''}
          >
            Change Password
          </h3>
          <h3
            onClick={() => setSelectedSection('editProfile')}
            className={selectedSection === 'editProfile' ? 'selected' : ''}
          >
            Edit Profile
          </h3>
          <h3
            onClick={() => setSelectedSection('account')}
            className={selectedSection === 'account' ? 'selected' : ''}
          >
            Account
          </h3>
        </div>
        <hr />
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default UserSettings;

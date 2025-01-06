import React from 'react';
import './NotificationModal.css';

const NotificationModal = ({ message, onClose }) => {
  return (
    <div className="notification-modal">
      <div className="notification-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotificationModal;

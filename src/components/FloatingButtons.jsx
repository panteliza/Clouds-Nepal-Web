import React, { useState } from 'react';
import { FaWhatsapp, FaCommentDots, FaTimes } from 'react-icons/fa';
import './FloatingButtons.css'; // Make sure this file exists and is linked

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtons = () => setIsOpen(!isOpen);

  return (
    <div className="floating-container">
      {isOpen && (
        <div className="floating-group">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9779766896866?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="floating-button green"
          >
            <FaWhatsapp size={24} color="white" />
          </a>

          {/* Email Button */}
          <a
            href="mailto:webcloudsnepal@gmail.com?subject=Service%20Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20construction%20services."
            target="_blank"
            rel="noreferrer"
            className="floating-button blue"
          >
            <FaCommentDots size={24} color="white" />
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <div className="floating-button orange toggle-btn" onClick={toggleButtons}>
        {isOpen ? <FaTimes size={24} color="white" /> : <FaCommentDots size={24} color="white" />}
      </div>
    </div>
  );
};

export default FloatingButtons;

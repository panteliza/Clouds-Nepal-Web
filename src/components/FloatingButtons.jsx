import React, { useState } from 'react';
import { FaWhatsapp, FaCommentDots, FaTimes } from 'react-icons/fa';
import letsTalkImg from '../assets/lets talk.png'; // ✅ Make sure this path is correct
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtons = () => setIsOpen(!isOpen);

  return (
    <div className="floating-container">
      {isOpen && (
        <>
          <a
            href="https://wa.me/9779766896866?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="floating-button green"
          >
            <FaWhatsapp size={24} color="white" />
          </a>

          <a
            href="mailto:webcloudsnepal@gmail.com?subject=Service%20Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="floating-button blue"
          >
            <FaCommentDots size={24} color="white" />
          </a>
        </>
      )}

      {/* ✅ Toggle Button */}
      <div onClick={toggleButtons}>
        {isOpen ? (
          <div className="floating-button red">
            <FaTimes size={24} color="white" />
          </div>
        ) : (
          <img
            src={letsTalkImg}
            alt="Let's Talk"
            className="lets-talk-image"
          />
        )}
      </div>
    </div>
  );
};

export default FloatingButtons;

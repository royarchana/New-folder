import React from 'react';
import './Button.css'; // Import the CSS file (see step 5)

const Button = ({ label, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label} </button>
  );
};

export default Button;

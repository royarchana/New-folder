import React from 'react';
import './Image.css'; // Import the CSS file (see step 5)

const Image = ({ src, alt }) => {
  return <img className="image" src={src} alt={alt} />;
};

export default Image;

import React from 'react';
import './Card.css'; // Import the CSS file (see step 5)

const Card = ({ title, subtitle, image, actions, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon">{image}</div> {/* Placeholder for the image/icon */}
        <div className="card-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="card-content">
        {/* Image/Visual Representation */}
        {image && <div className="image">{image}</div>}
      </div>
      <div className="card-footer">
        {description && <p className="description">{description}</p>}
        <div className="actions">
          {actions.map((action, index) => (
            <Button key={index} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import './Card.css'; 

const Card = ({ height = 'auto', width = 'auto',maxHeight = 'auto', maxWidth = 'auto', children }) => {
  return (
    <div className="card mt-2 shadow-md " style={{ height, width,maxHeight,maxWidth }}>
      {children}
    </div>
  );
};

export default Card;

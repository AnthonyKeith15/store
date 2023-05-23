import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './HoverButton.css'

const HoverButton = ({ variant, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getButtonVariant = () => {
    return isHovered ? 'contained' : variant;
  };

  return (
    <Button
      variant={getButtonVariant()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className='hover-button'
    >
      {children}
    </Button>
  );
};

export default HoverButton;

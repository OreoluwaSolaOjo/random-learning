import React from 'react';

type ButtonProps = {
  width: string;
  color: 'primary' | 'secondary' | 'default';
  text?: string;
  onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ width, color, text, onClick }) => {
  let backgroundColor;
  let focusRingColor;
  let textColor;

  switch(color) { 
    case 'primary':
      backgroundColor = 'var(--primary-dark-100)';  // Replace with your color
      // focusRingColor = '';
      textColor= 'var(--Off-White)'; // Replace with your color
      break;
    case 'secondary':
      backgroundColor = '#YOUR_SECONDARY_COLOR';  // Replace with your color
      focusRingColor = '#YOUR_SECONDARY_FOCUS_RING_COLOR'; // Replace with your color
      textColor= 'var(--Off-white)';
      break;
    default:
      backgroundColor = '#CCCCCC';  // Default gray as an example
      focusRingColor = '#AAAAAA'; // Default gray focus ring as an example
      textColor= 'var(--Off-white)';
  }

  const buttonStyle = {
    width: width,
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: '14px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: `0 0 0 2px ${focusRingColor}`
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;

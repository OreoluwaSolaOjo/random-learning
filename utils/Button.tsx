import React from 'react';

type ButtonProps = {
  width: string;
  color: string;
  text?: string;
  onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ width, color,text, onClick }) => {
  // Convert width and color props to corresponding Tailwind CSS classes
  const widthClass = width === '200px' ? 'w-52' : '';
  const colorClass = `bg-${color}`;

  return (
    <button
      className={`${widthClass} ${colorClass} px-4 py-2 border-none rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;

import React, { useState, ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  backgroundColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  backgroundColor = 'lightgray',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      style={{
        backgroundColor,
        border: '1px solid black',
        padding: '10px',
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {children}
      <button
        onClick={() => setIsVisible(false)}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        ×
      </button>
    </div>
  );
};

export default Tooltip;

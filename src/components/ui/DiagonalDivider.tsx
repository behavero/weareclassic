import React from 'react';

interface DiagonalDividerProps {
  color?: string;
  direction?: 'down' | 'up';
  height?: string;
}

export const DiagonalDivider: React.FC<DiagonalDividerProps> = ({ 
  color = '#ffeccb',
  direction = 'down',
  height = 'h-16 lg:h-24'
}) => {
  // SVG path for diagonal divider
  const pathDown = "M0,0 L0,100 L1440,80 L1440,0 Z";
  const pathUp = "M0,20 L0,100 L1440,100 L1440,0 Z";
  
  return (
    <div className={`relative ${height} -mb-1`}>
      <svg 
        viewBox="0 0 1440 100" 
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d={direction === 'down' ? pathDown : pathUp}
          fill={color}
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};









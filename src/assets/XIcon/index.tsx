import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

const XSquare: React.FC<Props> = ({ size = 20, color = "#00cc74" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M3 3h18v18H3zM15 9l-6 6m0-6l6 6" />
  </svg>
);

export default XSquare;
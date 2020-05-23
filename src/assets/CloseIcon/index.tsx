import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const CloseIcon: React.FC<Props> = ({ size = 24, color = "#3C4858" }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="square">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);


export default CloseIcon;
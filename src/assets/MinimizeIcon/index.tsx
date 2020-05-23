import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const MinimizeIcon: React.FC<Props> = ({ size = 24, color = "#3C4858" }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);


export default MinimizeIcon;
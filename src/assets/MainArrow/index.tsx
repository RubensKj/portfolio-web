import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const MainArrow: React.FC<Props> = ({ size = 82, color = "#00cc74" }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default MainArrow;
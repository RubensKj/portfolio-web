import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const MaximizeIcon: React.FC<Props> = ({ size = 24, color = "#3C4858" }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);
export default MaximizeIcon;
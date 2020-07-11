import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const ArrowRight: React.FC<Props> = ({ size = 100, color = "#00cc74" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
  );
}

export default ArrowRight;
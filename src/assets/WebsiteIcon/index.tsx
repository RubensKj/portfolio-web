import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const WebsiteIcon: React.FC<Props> = ({ size = 20, color = "#00cc74" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M15 21V9" />
  </svg>
);

export default WebsiteIcon;
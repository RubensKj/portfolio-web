import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

const LoadingIcon: React.FC<Props> = ({ size = 48, color = "#00cc74" }) => {
  return (
    <svg
      version="1.1"
      id="L9"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0">
      <path fill={color} d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50" transform="rotate(234.036 50 50)">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
      </path>
    </svg>
  );
}

export default LoadingIcon;
import React from "react";

interface BallProps {
  number: number;
  onRightClick: (num: number) => void;
  color?: string; 
}

const Ball: React.FC<BallProps> = ({ number, onRightClick, color = "#3498db" }) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: color, 
        color: "#ffffff", 
        textAlign: "center",
        lineHeight: "40px",
        margin: "4px",
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick(number);
      }}
    >
      {number}
    </div>
  );
};

export default Ball;
import React, { useState } from "react";
import Ball from "../ball";

const Exercise1: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleGenerateNumbers = () => {
    const numCount = Math.min(quantity, 12);
    const generatedNumbers = Array.from({ length: numCount }, () =>
      Math.floor(Math.random() * 100)
    );
    setNumbers(generatedNumbers.sort((a, b) => a - b));
  };

  return (
    <div style={{ 
      border: "2px solid black", 
      borderRadius: "8px", 
      padding: "16px", 
      backgroundColor: "#333333", 
      color: "#ffffff", 
    }}>
      <h2 style={{ color: "#800080" }}>Exercício 1:</h2> {}
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        max={12}
        min={1}
        placeholder="Quantos números gerar?"
        style={{ 
          backgroundColor: "#444444", 
          color: "#ffffff", 
          border: "1px solid #666666", 
          padding: "8px",
          borderRadius: "4px",
        }}
      />
      <button 
        onClick={handleGenerateNumbers}
        style={{ 
          backgroundColor: "#555555", 
          color: "#ffffff", 
          border: "1px solid #666666",
          padding: "8px 16px",
          borderRadius: "4px",
          marginLeft: "8px", 
          cursor: "pointer",
        }}
      >
        Gerar
      </button>

      <div style={{ marginTop: "16px" }}>
        {numbers.map((num, index) => (
          <Ball 
            key={index} 
            number={num} 
            onRightClick={() => {}} 
            color="#800080"
          />
        ))}
      </div>
    </div>
  );
};

export default Exercise1;
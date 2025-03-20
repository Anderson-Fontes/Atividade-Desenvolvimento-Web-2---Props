import { useState } from "react";
import Ball from "../ball";

function Exercise2() {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = () => {
    const num = Number(number);
    if (Number.isFinite(num)) {
      const newNumbers = numbers.length >= 12 ? numbers.slice(1) : numbers;
      setNumbers([...newNumbers, num]);
      setNumber("");
    }
  };

  const removeNumber = (num: number) => {
    setNumbers(numbers.filter((n) => n !== num));
  };

  return (
    <div style={{ 
      border: "2px solid black", 
      borderRadius: "8px", 
      padding: "16px", 
      backgroundColor: "#333333", 
      color: "#ffffff", 
    }}>
      <h2 style={{ color: "#ff0000" }}>Exercício 2:</h2> {}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ 
          backgroundColor: "#444444", 
          color: "#ffffff", 
          border: "1px solid #666666", 
          padding: "8px",
          borderRadius: "4px",
        }}
      />
      <button 
        onClick={addNumber}
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
        Adicionar Número
      </button>
      <div style={{ marginTop: "16px" }}>
        {numbers.map((num, index) => (
          <Ball 
            key={index} 
            number={num} 
            onRightClick={removeNumber} 
            color="#ff0000"
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise2;

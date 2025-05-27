import React from "react";
import { useNavigate } from "react-router-dom";

const Starting = () => {
  const newPage = useNavigate();

  const handleBack = () => {
    newPage(-1); 
  };

  return (
    <div>
      <button
        onClick={handleBack}
        className="bg-white text-black text-xl px-5 py-2 rounded hover:bg-gray-200"
      >
        ← Back
      </button>
    </div>
  );
};

export default Starting;

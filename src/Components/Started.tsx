import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Started = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const winner = location.state?.winner;

  if (!winner) {
    return (
      <div className="text-white text-center mt-10">
        <p>No winner found. Please start a new game.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          Back to Start
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6"> 
      </h1>
      <button
        onClick={() => navigate("/Starting")}
        className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 text-lg"
      >
        Play Again
      </button>
    </div>
  );
};

export default Started;

import React from "react";
import { Ask } from "./Ask";
import { useNavigate } from "react-router-dom";

const Wronganswer = () => {
  const navigate = useNavigate();


  return (
    <div className="h-screen flex flex-col justify-center items-center  text-white text-center">
      <div className="text-4xl mb-28">
        {Ask()[Math.floor(Math.random() * Ask().length)]}
      </div>
      <button
        onClick={() => navigate("/Starting")}
        className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 text-lg"
      >
        Play Again
      </button>
    </div>
  );
};

export default Wronganswer;

import React from "react";
import { Ask } from "./Ask";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Wronganswer = () => {
  useEffect(() => {
    <Wronganswer />;
  }, []);
  const navigate = useNavigate();


  return (
    <>
      <div className="text-white text-center text-4xl">
        <span className=" flex justify-center item-center">
          {Ask()[Math.floor(Math.random() * Ask().length)]}
        </span>
      <button
        onClick={() => navigate("/Starting")}
        className="px-6 py-2 mt-9 bg-white text-black rounded hover:bg-gray-200 text-lg"
        >
        Play Again
      </button>
        </div>
    </>
  );
};
export default Wronganswer;

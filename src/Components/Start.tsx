
import { useState } from "react";
import Starting from "./Starting";
const Start = () => {
  const [started, setStarted] = useState(false);

  const HandleChange = () => {
    setStarted(true);
  };

  return (
    <>
      {started ? (
        <Starting />
      ) : (
        <div
          className="text-center text-black cursor-pointer text-2xl h-8 w-20 mx-auto mt-5 rounded-4xl bg-white"
          onClick={HandleChange}
        >
          Start
        </div>
      )}
    </>
  );
};
export default Start;

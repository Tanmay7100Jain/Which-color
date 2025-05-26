import React, { useState } from "react";
import getRandomColor from "./Components/getRandomColor";
import Gameplay from "./Components/Gameplay";
import Starting from "./Components/Starting";
import Start from "./Components/Start";
function App() {
  const [isClicked, setIsClicked] = useState(false);
  const bgColor = getRandomColor();

  const handle = () => {
    setIsClicked(true);
  };
  
  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      {!isClicked ? (
        <div className="flex justify-center items-center">
          <img
            onClick={handle}
            style={{ background: bgColor }}
            className="h-80 w-80 mt-32 bg-black cursor-pointer"
            src="img3.png"
            alt="logo"
            />
        </div>
      ) : (
        <Gameplay />
      )}
    </div>
  );
}

export default App;

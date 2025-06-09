import React, { useState } from "react";
import getRandomColor from "./Components/getRandomColor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gameplay from "./Components/Gameplay";
import Starting from "./Components/Starting";
import Started from "./Components/Started"; 
import { PlayerContext } from "./Components/PlayerContext";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [players, setPlayers] = useState<string[]>([]);
  const bgColor = getRandomColor();

  
  setTimeout(() => {
    setIsClicked(true);
  }, 3000);

  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      <Router>
        <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
          <Routes>
            <Route
              path="/"
              element={
                !isClicked ? (
                  <div className="flex justify-center items-center">
                  <img
                    style={{ background: bgColor }}
                    className="h-80 w-80 mt-32 text-center bg-black cursor-pointer"
                    src="img3.png"
                    alt="logo"
                  />
                </div>
                
                ) : (
                  <Gameplay />
                )
              }
            />
            <Route path="/starting" element={<Starting />} />
            <Route path="/gameplay" element={<Gameplay />} />
            <Route path="/winner" element={<Started />} /> 
          </Routes>
        </div>
      </Router>
    </PlayerContext.Provider>
  );
}

export default App;

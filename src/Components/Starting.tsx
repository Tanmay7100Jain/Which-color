import { useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "./PlayerContext";
import getRandomColor from "./getRandomColor";

const Starting = () => {
  const { players } = useContext(PlayerContext);
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const angleStep = 360 / players.length;
  const colors = useMemo(() => players.map(() => getRandomColor()), [players]);

  const isColorDark = (hexColor: string) => {
    const color = hexColor.startsWith("#") ? hexColor.slice(1) : hexColor;
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  const handleSpin = useCallback(() => {
    if (isSpinning || players.length === 0) return;
    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * players.length);
    const randomTurns = Math.floor(Math.random() * 10) + 10;
    const spinAngle = 360 * randomTurns + randomIndex * angleStep + angleStep / 2;

    setRotation(spinAngle);

    setTimeout(() => {
      setIsSpinning(false);
      setRotation(spinAngle % 360);
      navigate("/winner", {
        state: {
          winner: players[randomIndex],
        },
      });
    }, 3990);
  }, [isSpinning, players, angleStep, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <button
        onClick={() => navigate(-1)}
        className="bg-white text-black text-lg md:text-xl px-4 py-2 rounded hover:bg-gray-200 absolute top-4 left-4"
      >
        ← Back
      </button>

      <div className="mb-6 px-4 py-2 max-w-md mx-auto bg-white/20 rounded-lg text-white text-center font-semibold tracking-wide shadow-md select-none break-words">
        Players: {players.length > 0 ? players.join(", ") : "No players found"}
      </div>

      <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-white mb-[-20px] z-20" />

      <div className="relative w-[90vw] max-w-[400px] aspect-square rounded-full border-4 border-black overflow-hidden mt-24 sm:mt-20">
        <div className="w-full h-full">
          {players.map((key, index) => {
            const segmentRotation = index * angleStep;
            const bgColor = colors[index];
            const textColor = isColorDark(bgColor) ? "#fff" : "#000";

            return (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{ transform: `rotate(${segmentRotation}deg)` }}
              >
                <div
                  className="absolute w-1/2 h-full origin-left flex items-center justify-center"
                  style={{
                    backgroundColor: bgColor,
                    clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: "0.7rem",
                    paddingLeft: "10px",
                    userSelect: "none",
                  }}
                >
                  {key}
                </div>
              </div>
            );
          })}
        </div>

        <span
          className="absolute top-1/2 left-1/2 text-[8vw] z-10 select-none"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            transition: isSpinning ? "transform 4000ms ease-out" : "none",
            transformOrigin: "50% 60%",
          }}
        >
          🍾
        </span>
      </div>

      <button
        onClick={handleSpin}
        className="mt-8 bg-white px-6 py-2 rounded text-lg sm:text-xl hover:bg-gray-200 text-black"
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin the Bottle"}
      </button>
    </div>
  );
};

export default Starting;

// Components/Gameplay.tsx
import { useContext, useState } from "react";
import NotStart from "./NotStart";
import Start from "./Start";
import { PlayerContext } from "./PlayerContext";

const Gameplay = () => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [playerName, setPlayerName] = useState("");

  const HandleAdd = () => {
    if (playerName.trim() !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };

  return (
    <>
      <div className="text-4xl text-white text-right mr-9">How to play?</div>
      <div className="text-4xl text-white text-right mr-20 mt-4">Rules</div>

      <div className="text-center">
        <h1 className="text-3xl mt-10 text-white">
          Get in the game! What's your name?
        </h1>
        <input
          className="bg-white text-base rounded-sm border-black p-2 placeholder:text-violet-400"
          placeholder="Name if daring to play"
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button
          onClick={HandleAdd}
          className="text-black text-2xl mt-3 ml-4 bg-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>

      <div className="text-white text-2xl mt-8 text-center">
        <div>Dare Devils are:</div>
        <ul className="mt-2">
          {players.map((name, index) => (
            <li key={index} className="font-bold mt-9">
              <div className="flex justify-between items-center bg-white text-black px-4 py-2 rounded w-[90%] mx-auto">
                <span className="text-lg">{name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {players.length >= 4 ? <Start /> : <NotStart />}
    </>
  );
};

export default Gameplay;

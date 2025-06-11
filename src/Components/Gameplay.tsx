// Components/Gameplay.tsx
import { useContext, useState } from "react";
import NotStart from "./NotStart";
import Start from "./Start";
import { PlayerContext } from "./PlayerContext";

const Gameplay = () => {
  const { players, setPlayers } = useContext(PlayerContext);
  const [playerName, setPlayerName] = useState("");
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const HandleAdd = () => {
    if (playerName.trim() !== "") {
      setPlayers([...players, playerName]);
      setPlayerName("");
    }
  };
  const HandleDelete = (index: number) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  console.log(HandleDelete);
  return (
    <>
      <div className="flex justify-end gap-4 mr-4">
        <button
          onClick={() => setShowHowToPlay(!showHowToPlay)}
          className=" text-white text-3xl px-4 py-1 rounded"
        >
          How to play?
        </button>
        <button
          onClick={() => setShowRules(!showRules)}
          className="text-3xl text-white  px-4 py-1 rounded"
        >
          Rules
        </button>
      </div>

      {showHowToPlay && (
        <div className="bg-white text-black p-4 rounded-lg mx-4 mt-4">
          <h2 className="text-2xl font-bold mb-2">How to Play:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Add at least 4 players to start the game</li>
            <li>Click "Spin the Bottle" to randomly select a player</li>
            <li>If it's a question, answer correctly before time runs out</li>
            <li>The selected player must answer a question .</li>
            <li>
              If you fail, you'll get a random question or dare to complete
            </li>
            <li>Continue playing until everyone has had a turn</li>
          </ol>
        </div>
      )}

      {showRules && (
        <div className="bg-white text-black p-4 rounded-lg mx-4 mt-4">
          <h2 className="text-2xl font-bold mb-2">Game Rules:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Minimum 4 players required to start</li>
            <li>Players must be honest in their answers</li>
            <li>Dares must be completed as described</li>
            <li>No skipping turns once selected</li>
            <li>Be respectful - no offensive dares or questions</li>
            <li>The game continues until all players agree to stop</li>
            <li>Have fun and don't take it too seriously!</li>
            <li>Have fun and don't take it too seriously!</li>
            <li> Always remember that your spelling should be correct.</li>
            <li>
              If you think their answer is correct, then click on 'Play Again'
              and return."
            </li>
            <li>
              For color questions, answers must start with the color name (e.g.,
              "red apple")
            </li>
          </ul>
        </div>
      )}

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
                <button className="w-32 bg-red-600 rounded-4xl " onClick={() => HandleDelete(index)}>Delete</button>
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

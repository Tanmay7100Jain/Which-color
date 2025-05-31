// Components/PlayerContext.tsx
import { createContext } from "react";

export const PlayerContext = createContext<{
  players: string[];
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  players: [],
  setPlayers: () => {},
});

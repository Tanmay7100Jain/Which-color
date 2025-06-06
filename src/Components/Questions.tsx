import React, { useState } from "react";
import { answers } from "./Answers";

const colorKeys: Record<string, string> = {
  red: "red",
  blue: "blue",
  green: "green",
  yellow: "yellow",
  orange: "orange",
  pink: "pink",
  black: "black",
  white: "white",
  brown: "brown",
  gray: "gray",
  purple: "purple",
  gold: "gold",
  silver: "silver",
  beige: "beige",
  lime: "lime",
  teal: "teal",
  peach: "peach",
  skyblue: "sky blue",
  maroon: "maroon",
  olive: "olive",
  turquoise: "turquoise",
  coral: "coral",
  mustard: "mustard",
  lavender: "lavender",
  navy: "navy",
  cyan: "cyan",
  magenta: "magenta",
  indigo: "indigo",
  violet: "violet",
  crimson: "crimson",
  salmon: "salmon",
  mint: "mint",
  rose: "rose",
  amber: "amber",
  rust: "rust",
  denim: "denim",
  fuchsia: "fuchsia",
  emerald: "emerald",
  charcoal: "charcoal",
  sky: "sky",
  copper: "copper",
  cream: "cream",
  ivory: "ivory",
  chocolate: "chocolate",
  tan: "tan",
  plum: "plum",
  brick: "brick",
  snow: "snow",
  lemon: "lemon",
  bubblegum: "bubblegum",
};

const questions: string[] = [
  "Name something that is red in color.",
  "Name something that is blue in color.",
  "Name something that is green in color.",
  "Name something that is yellow in color.",
  "Name something that is orange in color.",
  "Name something that is pink in color.",
  "Name something that is black in color.",
  "Name something that is white in color.",
  "Name something that is brown in color.",
  "Name something that is gray in color.",
  "Name something that is purple in color.",
  "Name something that is gold in color.",
  "Name something that is silver in color.",
  "Name something that is beige in color.",
  "Name something that is lime in color.",
  "Name something that is teal in color.",
  "Name something that is peach in color.",
  "Name something that is sky blue in color.",
  "Name something that is maroon in color.",
  "Name something that is olive in color.",
  "Name something that is turquoise in color.",
  "Name something that is coral in color.",
  "Name something that is mustard in color.",
  "Name something that is lavender in color.",
  "Name something that is navy in color.",
  "Name something that is cyan in color.",
  "Name something that is magenta in color.",
  "Name something that is indigo in color.",
  "Name something that is violet in color.",
  "Name something that is crimson in color.",
  "Name something that is salmon in color.",
  "Name something that is mint in color.",
  "Name something that is rose in color.",
  "Name something that is amber in color.",
  "Name something that is rust in color.",
  "Name something that is denim in color.",
  "Name something that is fuchsia in color.",
  "Name something that is emerald in color.",
  "Name something that is charcoal in color.",
  "Name something that is sky in color.",
  "Name something that is copper in color.",
  "Name something that is cream in color.",
  "Name something that is ivory in color.",
  "Name something that is chocolate in color.",
  "Name something that is tan in color.",
  "Name something that is plum in color.",
  "Name something that is brick in color.",
  "Name something that is snow in color.",
  "Name something that is lemon in color.",
  "Name something that is bubblegum in color.",
];

const Questions: React.FC = () => {
  const [randomIndex, setRandomIndex] = useState<number>(
    Math.floor(Math.random() * questions.length)
  );
  const [userInput, setUserInput] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const question = questions[randomIndex];

  const colorMatch = question.match(/Name something that is (.+) in color\./i);
  const color: string = colorMatch ? colorMatch[1].toLowerCase() : "";

  const key: string = colorKeys[color] || color;

  const validAnswers: string[] = answers[key] || [];

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const checkAnswer = () => {
    if (
      validAnswers.some(
        (ans) => ans.toLowerCase() === userInput.trim().toLowerCase()
      )
    ) {
      setFeedback("Correct!");
      setTimeout(() => {
        let nextIndex: number;
        do {
          nextIndex = Math.floor(Math.random() * questions.length);
        } while (nextIndex === randomIndex); // avoid repeat question

        setRandomIndex(nextIndex);
        setUserInput("");
        setFeedback("");
      }, 1500);
    } else {
      setFeedback("Try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <div className="text-center mb-6">
      <p className="text-xl mb-4">{question}</p>
      <input
        type="text"
        className="px-3 py-2 rounded text-black"
        placeholder="Your answer"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={checkAnswer}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Check
      </button>
      {feedback && <p className="mt-3 font-semibold">{feedback}</p>}
    </div>
  );
};

export default Questions;

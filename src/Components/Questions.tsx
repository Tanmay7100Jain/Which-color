import React, { useState, useEffect } from "react";
import { answers } from "../constants/Answers";
import { questions, colorKeys } from "../constants/Question.constant";

const Questions: React.FC = () => {
  const [randomIndex] = useState<number>(
    Math.floor(Math.random() * questions.length)
  );
  const [userInput, setUserInput] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [showInput, setShowInput] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [resultStatus, setResultStatus] = useState<string>(""); 
  const question = questions[randomIndex];
  const colorMatch = question.match(/Name something that is (.+) in color\./i);
  const color: string = colorMatch ? colorMatch[1].toLowerCase() : "";
  const key: string = colorKeys[color] || color;
  const validAnswers: string[] = answers[key] || [];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  
  const checkAnswer = () => {
    const isCorrect = validAnswers.some(
      (ans) => ans.toLowerCase() === userInput.trim().toLowerCase()
    );

    if (isCorrect) {
      setFeedback("✅ Correct!");
      setResultStatus("correct");
      setShowInput(false);
    } else {
      setFeedback("❌ Try again.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setShowInput(false);
          if (resultStatus !== "correct") {
            setResultStatus("timeout");
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [resultStatus]);


  return (
    <>
    <div className="text-center mb-6">
      <p className="text-2xl mb-8">{question}</p>

      {showInput ? (
        <>
          <input
            type="text"
            className="px-3 py-2 rounded bg-white text-black"
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
        </>
      ) : resultStatus === "correct" ? (
        <p className="text-white text-center text-3xl font-semibold">
          ✅ Correct!
        </p>
      ) : (
        <p className="text-white text-center text-3xl font-semibold">
          ⏰ Time's up!
        </p>
      )}{showInput &&
      <div className="text-white mt-2 text-lg">
        ⏳ Time left: {secondsLeft}s
      </div>}

      {feedback && <p className="mt-3 font-semibold">{feedback}</p>}
    </div>
    
  
 </>
  );
};

export default Questions;

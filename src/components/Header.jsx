/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Header.css";

export default function Header({ setArtist, cardData }) {
  const [highScore, setHighScore] = useState(0);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setArtist(e.target.value);
    }
  }

  let score = 0;
  cardData.map((card) => {
    if (card.clicked === true) score += 1;
  });

  function checkForHighScore() {
    if (score > highScore) {
      setHighScore(score);
    } else return;
  }

  checkForHighScore();

  return (
    <header>
      <div className="descriptionContainer">
        <h1>Album Cover Memory Game</h1>
        <p className="description">
          Get points for clicking different images. Your score resets if you
          click on the same image twice! <br /> Can you reach 12 points?
        </p>
      </div>
      <div className="sideContainer">
        <label htmlFor="artist">
          Change to new artist:
          <input
            placeholder="Hit Enter to confirm"
            type="text"
            name="artist"
            id="artist"
            onKeyDown={handleKeyDown}
          />
        </label>
        <div className="scoreContainer">
          <p className="score">Score: {score}</p>
          <p className="bestScore">Best Score: {highScore}</p>
        </div>
      </div>
    </header>
  );
}

/* eslint-disable react/prop-types */
import "../styles/Header.css";

export default function Header({ setArtist, cardData }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setArtist(e.target.value);
    }
  }

  let score = 0;
  cardData.map((card) => {
    if (card.clicked === true) score += 1;
  });

  return (
    <header>
      <div className="descriptionContainer">
        <h1>Memory Game</h1>
        <p className="description">
          Get points for clicking different images. Your streak resets if you
          click on the same image twice! <br /> Can you reach 12 points?
        </p>
      </div>
      <div className="sideContainer">
        <div className="inputContainer">
          <label htmlFor="artist">
            <input
              type="text"
              name="artist"
              id="artist"
              onKeyDown={handleKeyDown}
            />
          </label>
        </div>
        <div className="scoreContainer">
          <p className="score">Score: {score}</p>
          <p className="bestScore">Best Score: 0</p>
        </div>
      </div>
    </header>
  );
}

import "../styles/Header.css";

export default function Header() {
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
            <input type="text" name="artist" id="artist" />
          </label>
          <input type="submit" name="submit" id="submit" />
        </div>
        <div className="scoreContainer">
          <p className="score">Score: 1</p>
          <p className="bestScore">Best Score: 1</p>
        </div>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [secretNumber, setSecretNumber] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  // Generate a random number when game starts
  const startNewGame = () => {
    const newSecretNumber = Math.floor(Math.random() * 100) + 1;
    setSecretNumber(newSecretNumber);
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameWon(false);
    setGameStarted(true);
  };

  const handleGuess = () => {
    if (!guess.trim()) return;
    
    const guessNum = parseInt(guess);
    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      setMessage('Please enter a valid number between 1 and 100!');
      return;
    }

    setAttempts(prev => prev + 1);

    if (guessNum === secretNumber) {
      setMessage(`🎉 Congratulations! You won in ${attempts + 1} attempts! 🎉`);
      setGameWon(true);
    } else if (guessNum < secretNumber) {
      setMessage('📈 Too small! Try a bigger number.');
    } else {
      setMessage('📉 Too big! Try a smaller number.');
    }
    
    setGuess('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className="App">
      <div className="game-container">
        <h1 className="title">🎯 Number Guessing Game</h1>
        
        {!gameStarted ? (
          <div className="loading">Loading game...</div>
        ) : (
          <>
            <div className="game-info">
              <p className="attempts">Attempts: {attempts}</p>
              <p className="range">Guess a number between 1 and 100</p>
            </div>

            <div className="input-section">
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your guess..."
                className="guess-input"
                disabled={gameWon}
                min="1"
                max="100"
              />
              <button 
                onClick={handleGuess}
                className="guess-button"
                disabled={gameWon || !guess.trim()}
              >
                Guess!
              </button>
            </div>

            {message && (
              <div className={`message ${gameWon ? 'win-message' : 'hint-message'}`}>
                {message}
              </div>
            )}

            {gameWon && (
              <div className="new-game-section">
                <button onClick={startNewGame} className="new-game-button">
                  🎮 Play Again
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

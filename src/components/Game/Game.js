import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox';
import GuessGrid from '../GuessGrid/GuessGrid';
import ResultBanner from '../ResultBanner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);
  const [gameOverMessage, setGameOverMessage] = React.useState('');

  function setGuessData(guess) {
    const nextSetGuesses = [...guesses];
    nextSetGuesses.push({
      key: crypto.randomUUID(),
      word: guess,
      gridStyle: checkGuess(guess, answer),
    });
    setGuesses(nextSetGuesses);
    if (guess === answer) {
      setGameOver(true);
      setGameWon(true);
      setGameOverMessage(
        `<b>Congratulations!</b> Got it in <b>${guesses.length} guesses.</b>`
      );
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED-1) {
      setGameOver(true);
      setGameWon(false);
      setGameOverMessage(`Sorry, the correct answer is <b>${answer}</b>`);
    }
  }

  return (
    <>
      {gameOver && (
        <ResultBanner gameResult={gameWon} message={gameOverMessage} />
      )}
      <GuessGrid guesses={guesses} />
      <InputBox setGuessData={setGuessData} disableInput={gameOver} />
    </>
  );
}

export default Game;

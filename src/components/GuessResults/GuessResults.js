import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(({ key, word }) => (
        <p id={key} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

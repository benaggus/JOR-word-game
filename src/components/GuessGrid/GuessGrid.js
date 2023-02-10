import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessGrid({ guesses }) {
  const grid = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div key="resultsGrid" className="guess-results">
      {grid.map((row) => (
        <p key={row.toString()} className="guess">
          <span
            key={row.toString() + '-1'}
            className={
              guesses[row] ? 'cell ' + guesses[row].gridStyle[0].status : 'cell'
            }
          >
            {guesses[row] && guesses[row].word.slice(0, 1)}
          </span>
          <span
            key={row.toString() + '-2'}
            className={
              guesses[row] ? 'cell ' + guesses[row].gridStyle[1].status : 'cell'
            }
          >
            {guesses[row] && guesses[row].word.slice(1, 2)}
          </span>
          <span
            key={row.toString() + '-3'}
            className={
              guesses[row] ? 'cell ' + guesses[row].gridStyle[2].status : 'cell'
            }
          >
            {guesses[row] && guesses[row].word.slice(2, 3)}
          </span>
          <span
            key={row.toString() + '-4'}
            className={
              guesses[row] ? 'cell ' + guesses[row].gridStyle[3].status : 'cell'
            }
          >
            {guesses[row] && guesses[row].word.slice(3, 4)}
          </span>
          <span
            key={row.toString() + '-5'}
            className={
              guesses[row] ? 'cell ' + guesses[row].gridStyle[4].status : 'cell'
            }
          >
            {guesses[row] && guesses[row].word.slice(4, 5)}
          </span>
        </p>
      ))}
    </div>
  );
}

export default GuessGrid;

import React from 'react';
import './ResultBanner.css';

function ResultBanner({ gameResult, message }) {
  return (
    <div id="banner">
      <div
        className={gameResult ? 'gameWon' : 'gameLost'}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  );
}

export default ResultBanner;

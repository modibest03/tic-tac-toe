import React from 'react';
import './App.css';

const TicTacToePresentation = ({ box, run, error, winner, refresh }) => {
  return (
    <div className='tic-parent'>
      {!!error && <div>{error}</div>}
      {!!winner && <div>{winner}</div>}
      <button onClick={refresh}>Refresh</button>
      <div className='tic-main'>
        {box.map((item, index) => (
          <div
            key={index}
            onClick={() => run(index)}
            className={`box ${
              index === 1 || index === 4 || index === 7
                ? 'border-right border-left'
                : ''
            } ${
              index === 4 || index === 3 || index === 5
                ? 'border-bottom border-top'
                : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToePresentation;

import logo from './logo.svg';
import './App.css';
import TicTacToePresentation from './TicTacToePresentation';
import { useEffect, useState } from 'react';

function App() {
  const [box, setBox] = useState(['', '', '', '', '', '', '', '', '']);
  const [activeState, setActiveState] = useState('X');
  const [error, setError] = useState('');
  const [winner, setWinner] = useState('');

  const insertItem = (index) => {
    let newArr = [...box];
    newArr[index] = activeState;
    return newArr;
  };

  const checkActiveState = (index) => {
    const newArr = insertItem(index);
    setBox(newArr);
    setError('');
    if (activeState === 'X') {
      setActiveState('O');
    }
    if (activeState === 'O') {
      setActiveState('X');
    }
  };

  useEffect(() => {
    checkWinner();
  }, [box]);

  const checkWinner = () => {
    if (
      (box[0] === 'X' && box[1] === 'X' && box[2] === 'X') ||
      (box[3] === 'X' && box[4] === 'X' && box[5] === 'X') ||
      (box[6] === 'X' && box[7] === 'X' && box[8] === 'X') ||
      (box[0] === 'X' && box[4] === 'X' && box[8] === 'X') ||
      (box[2] === 'X' && box[4] === 'X' && box[6] === 'X') ||
      (box[1] === 'X' && box[4] === 'X' && box[7] === 'X') ||
      (box[2] === 'X' && box[5] === 'X' && box[8] === 'X') ||
      (box[0] === 'X' && box[3] === 'X' && box[6] === 'X')
    ) {
      setWinner('The winner is X');
    }

    if (
      (box[0] === 'O' && box[1] === 'O' && box[2] === 'O') ||
      (box[3] === 'O' && box[4] === 'O' && box[5] === 'O') ||
      (box[6] === 'O' && box[7] === 'O' && box[8] === 'O') ||
      (box[0] === 'O' && box[4] === 'O' && box[8] === 'O') ||
      (box[2] === 'O' && box[4] === 'O' && box[6] === 'O') ||
      (box[1] === 'O' && box[4] === 'O' && box[7] === 'O') ||
      (box[2] === 'O' && box[5] === 'O' && box[8] === 'O') ||
      (box[0] === 'O' && box[3] === 'O' && box[6] === 'O')
    ) {
      setWinner('The winner is 0');
    }
  };

  const refresh = () => {
    setBox(['', '', '', '', '', '', '', '', '']);
    setActiveState('X');
    setError('');
    setWinner('');
  };

  const run = (index) => {
    if (winner) {
      return setWinner('Game is over pls refresh to start playing again');
    }
    if (box[index] !== '') {
      return setError('You can"t Insert a value in the box that is not empty');
    }
    checkActiveState(index);
  };

  return (
    <div className='App'>
      <TicTacToePresentation
        box={box}
        run={run}
        error={error}
        winner={winner}
        refresh={refresh}
      />
    </div>
  );
}

export default App;

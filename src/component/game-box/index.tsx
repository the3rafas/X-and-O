import * as React from 'react';
import './style.css';
import PlayerCard from '../player-card';
import GameBoard from '../game-board';
import AppLogs from '../logs/inndex';

// winning combination in
/*
const initialValue = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
};
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
[].filter(boolean).length===3
*/
const winningSate = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
export const initialValue = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
};
enum gameStateDescription {
  'Win' = ' Win',
  'Draw' = "It's a Draw. Try again",
}
const derivedPlayer = (derivedArray: HistoryType[]): 'X' | 'O' => {
  let player: 'X' | 'O' = 'X';
  if (derivedArray.length && derivedArray[0].player === 'X') {
    player = 'O';
  }
  return player;
};

function GameState(gameElement: {}): stateType {
  let gameState: stateType = 'On';
  const gameElementValues = Object.values(gameElement).filter(Boolean);
  if (gameElementValues.filter(Boolean).length >= 5) {
    for (const state of winningSate) {
      const stateCheck = state
        .map((e) => gameElement[e])
        .every((currentValue) => {
          return currentValue === gameElement[state[0]] && currentValue;
        });

      if (stateCheck) gameState = 'Win';
      if (!stateCheck && gameElementValues.length == 9) gameState = 'Draw';
    }
  }
  return gameState;
}

export type HistoryType = { squareNumber: string; player: 'X' | 'O' };
export type stateType = 'On' | 'Draw' | 'Win';
export default function GameBox() {
  const [gameHistory, setGameHistory] = React.useState<HistoryType[]>([]);
  const selectedPlayer = derivedPlayer(gameHistory);
  const GameValue = {};
  gameHistory.forEach((e) => (GameValue[e.squareNumber] = e.player));
  let gameState: stateType = GameState(GameValue);

  function handelXorO(squareNumber: string | '_') {
    setGameHistory((prevState) => {
      const player = derivedPlayer(prevState);
      const updatedHistory = [{ squareNumber, player }, ...prevState];
      const GameValue = {};
      updatedHistory.forEach((e) => (GameValue[e.squareNumber] = e.player));

      return updatedHistory;
    });
  }
  function handelRematch() {
    setGameHistory([]);
    Object.keys(initialValue).forEach((e) => (initialValue[e] = null));
    gameState = 'On';
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <PlayerCard name='Player 1' symbol='X' active={selectedPlayer === 'X'} />
          <PlayerCard name='Player 2' symbol='O' active={selectedPlayer === 'O'} />
        </ol>
        {(gameState === 'Win' || gameState === 'Draw') && (
          <div id='game-over'>
            <h2>Game Over!</h2>
            <p>
              {gameState === 'Win'
                ? gameHistory[0].player + gameStateDescription[gameState]
                : gameStateDescription[gameState]}
            </p>
            <p>
              <button onClick={handelRematch}>Rematch!</button>
            </p>
          </div>
        )}

        <GameBoard history={gameHistory} fireSymbol={handelXorO} boardState={gameState} />
      </div>
      <AppLogs history={gameHistory} />
    </main>
  );
}

import * as React from 'react';
import { HistoryType, initialValue, stateType } from '../game-box';

export default function GameBoard({
  history,
  fireSymbol,
  boardState,
}: {
  boardState: stateType;
  history: HistoryType[];
  fireSymbol: (s: string) => void;
}) {
  let gameElement = initialValue;
  for (const iterator of history) {
    const { player, squareNumber } = iterator;
    gameElement[squareNumber] = player;
  }

  return (
    <div id='game-board'>
      <ol>
        {Object.entries(gameElement).map(([key, value]) => {
          return (
            <li key={key}>
              <button disabled={!!value} onClick={() => fireSymbol(key)}>
                {value}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

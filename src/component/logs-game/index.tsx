import * as React from 'react';
import { HistoryType } from '../game-box';
export default function AppLogs({ history }: { history: HistoryType[] }) {
  return (
    <ol id='log'>
      {history.map((e, index) => {
        return (
          <li key={index}>
            {e.player} selected {e.squareNumber}
          </li>
        );
      })}
    </ol>
  );
}

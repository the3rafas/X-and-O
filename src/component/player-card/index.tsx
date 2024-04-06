import * as React from 'react';
export default function PlayerCard({ name, symbol, active }: { name: string; symbol: 'X' | 'O'; active: boolean }) {
  const [playerName, setPlayerName] = React.useState<string>(name);
  const [edit, setEdit] = React.useState<boolean>(false);
  let playerElement: JSX.Element = <span className='player-name'>{playerName}</span>;

  if (edit) {
    playerElement = (
      <input
        type='text'
        required
        value={playerName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPlayerName(e.target.value);
        }}
      />
    );
  }
  const toggleEditOrSave = () => {
    setEdit((prevState) => !prevState);
  };

  return (
    <li className={(active ? 'active ' : '') + 'player'}>
      {playerElement}
      <span className='player-symbol'>{symbol}</span>
      <button onClick={toggleEditOrSave}>{edit ? 'Save' : 'Edit'}</button>
    </li>
  );
}

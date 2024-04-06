import * as React from 'react';
import LogoImg from '/game-logo.png';

export default function Header() {
  return (
    <header>
      <img src={LogoImg} alt='logo' width={100} height={100} />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}

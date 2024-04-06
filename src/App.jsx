import GameBox from './component/game-box';
import Header from './component/header';

function App() {
  return (
    <>
      <Header />
      <div className='game-container'>
        <GameBox />
      </div>
    </>
  );
}

export default App;

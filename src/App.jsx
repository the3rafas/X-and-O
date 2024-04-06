import GameBox from './component/game-box';
import Header from './component/header';
import AppLogs from './component/logs/inndex';

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

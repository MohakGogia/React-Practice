import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Beginner" targetTime={1} />
        <TimerChallenge title="Rookie" targetTime={5} />
        <TimerChallenge title="Pro" targetTime={10} />
        <TimerChallenge title="Expert" targetTime={15} />
      </div>
    </>
  );
}

export default App;

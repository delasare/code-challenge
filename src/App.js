import './App.css';
import { CountDisplay, Counter } from './Counter/count';
import { CountProvider } from './Counter/count-context';

function App() {
  return (
    <div className="App">
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;

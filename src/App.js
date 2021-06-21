import './App.css';
import { CountDisplay, Counter } from './count';
import { CountProvider } from './count-context';

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

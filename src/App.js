import './App.css';
import { MyFeedDisplay, MyFeedUrls } from './MyFeed/myFeed';
import { MyFeedProvider } from './MyFeed/myFeed-context';

function App() {
  return (
    <div className="App">
      <MyFeedProvider>
        <MyFeedDisplay />
        <MyFeedUrls />
      </MyFeedProvider>
    </div>
  );
}

export default App;

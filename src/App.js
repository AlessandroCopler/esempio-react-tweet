import logo from './logo.svg';
import './App.css';
import { TweetSearchResult} from './TweetSearchResult';

function App() {
  return (
    <TweetSearchResult tweets={[]} tweetFilter={""} />
  );
}

export default App;

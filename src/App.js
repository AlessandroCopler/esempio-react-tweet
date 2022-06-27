import logo from './logo.svg';
import './App.css';
import { TweetSearchResult} from './TweetSearchResult';
import { useState } from "react"

function App() {
  const [tweets, setTweets] = useState([])

  return (
    <TweetSearchResult tweets={tweets} />
  );
}

export default App;

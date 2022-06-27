import logo from './logo.svg';
import './App.css';
import { TweetSearchResult} from './TweetSearchResult';
import { useState } from "react"

function App() {
  const [tweets, setTweets] = useState([])
  const [tweetFilter, setTweetFilter] = useState("")
  const [tweetCheckLocal, setTweetCheckLocal] = useState(false)

  return (
    <TweetSearchResult tweets={tweets} tweetFilter={tweetFilter} tweetCheckLocal={tweetCheckLocal} />
  );
}

export default App;

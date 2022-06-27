import logo from './logo.svg';
import './App.css';
import { TweetSearchResult} from './TweetSearchResult';
import { useState, useEffect } from "react"

const TWEETS = [
{
  "text": "Omg. A tweet.",
  "local": false,
  "number": 33,
  "category": "Tecnology"
},
{
  "text": "Omg. Another.",
  "local": false,
  "number": 55,
  "category": "Tecnology"
},
{
  "text": "Omg. Is local!",
  "local": true,
  "number": 77,
  "category": "Farm"
},
{
  "text": "Omg. Police!",
  "local": false,
  "number": 12,
  "category": "Farm"
},
]

function App() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    setTweets(TWEETS)
  },[])

  return (
    <TweetSearchResult tweets={tweets} />
  );
}

export default App;

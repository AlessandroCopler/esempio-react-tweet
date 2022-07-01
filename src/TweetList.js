import { useEffect } from "react"
import { TweetCategory } from "./TweetCategory"

export const TweetList = (props) => {

    const {tweets,tweetFilter,tweetCheckLocal} = props

    useEffect(() => {
        console.log(tweets)
    },[tweets])

    const listOfTweetsFIlteredText = tweets.filter(function (tweet) {
        console.log("Filtro testo")
        if(tweetFilter === ""){
            return true
        }
        return tweet.text.toLowerCase().includes(tweetFilter.toLowerCase())
    })

    const listOfTweetsFIlteredCheck = listOfTweetsFIlteredText.filter(function (tweet) {
        console.log("Filtro check booleano")
        if(tweetCheckLocal === undefined || tweetCheckLocal === false){
            return true
        }
        return tweet.local === tweetCheckLocal
    })

    const listaCategorieUniche = listOfTweetsFIlteredCheck.map((tweet) => {return tweet.category}).filter((value, index, list) => {
        return list.indexOf(value) === index
    })

    return(
        <>
            {
                listaCategorieUniche.map((element) => {
                  const listaTweets = listOfTweetsFIlteredCheck.filter((tweet) => {
                    return tweet.category == element
                  })
                  console.log("lunghezza tweets filtrati da categoria")
                  console.log(listaTweets.length)
                  if(listaTweets.length !== 0){
                    return (<div><b>{element}</b><TweetCategory tweets={listaTweets} tweetFilter={tweetFilter} tweetCheckLocal={tweetCheckLocal} /></div>)
                  }
                })
            }
            
        </>
    )
}
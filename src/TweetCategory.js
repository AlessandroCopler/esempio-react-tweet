import { TweetRow } from "./TweetRow"


export const TweetCategory = (props) => {

    const {tweets,tweetFilter,tweetCheckLocal} = props

    const listOfTweetsFIlteredText = tweets.filter(function (tweet) {
        if(tweetFilter === ""){
            return true
        }
        else{
            return tweet.text.toLowerCase().includes(tweetFilter)
        }
    })

    const listOfTweetsFIlteredCheck = listOfTweetsFIlteredText.filter(function (tweet) {
        if(tweetCheckLocal === undefined){
            return true
        }
        else{
            return tweet.local === tweetCheckLocal
        }
    })

    const listOfTweets = listOfTweetsFIlteredCheck.map((tweet) => 
        <TweetRow tweet={tweet} />
    )

    return(
        <>
            {listOfTweets}
        </>
    )
}
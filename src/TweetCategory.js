import { TweetRow } from "./TweetRow"


export const TweetCategory = (props) => {

    const {tweets,tweetFilter,tweetCheckLocal} = props

    const listOfTweetsFIltered = tweets.filter(function (tweet) {
        if(tweetFilter === ""){
            return tweet
        }
        else{
            return tweet.text.includes(tweetFilter)
        }
    })

    const listOfTweets = listOfTweetsFIltered.map((tweet) => 
        <TweetRow tweet={tweet} />
    )

    return(
        <>
            {listOfTweets}
        </>
    )
}
import { TweetRow } from "./TweetRow"


export const TweetCategory = (props) => {

    const {tweets,tweetFilter,tweetCheckLocal} = props

    const listOfTweets = tweets.map((tweet) => {
        return <TweetRow tweet={tweet} />
    })

    return(
        <>
            {listOfTweets}
        </>
    )
}
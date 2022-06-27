import { TweetRow } from "./TweetRow"


export const TweetCategory = (props) => {

    const {tweets} = props

    const listOfTweets = tweets.map((tweet) => 
        <TweetRow tweet={tweet} />
    )
    return(
        <>
            {listOfTweets}
        </>
    )
}
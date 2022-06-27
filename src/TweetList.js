import { useEffect } from "react"
import { TweetCategory } from "./TweetCategory"

export const TweetList = (props) => {

    const {tweets,tweetFilter,tweetCheckLocal} = props

    useEffect(() => {
        console.log(tweets)
    },[tweets])



    return(
        <>
            <TweetCategory tweets={tweets} />
        </>
    )
}
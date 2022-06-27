import { SearchBar } from "./SearchBar"
import { useState, useEffect } from "react"


export const TweetSearchResult = (props) => {

    const {tweets=[]} = props
    const [tweetFilter, setTweetFilter] = useState("")
    const [tweetCheckLocal, setCheckLocal] = useState(false)

    useEffect(() => {
        console.log(tweetFilter)
        console.log(tweetCheckLocal)
    },[tweetFilter,tweetCheckLocal])

    return(
        <>
            <SearchBar setTweetFilter={setTweetFilter} setCheckLocal={setCheckLocal}></SearchBar>
        </>
    )
}
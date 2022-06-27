import { SearchBar } from "./SearchBar"


export const TweetSearchResult = (props) => {
    const {tweets = []} = props.tweets
    const {tweetFilter} = props.tweetFilter
    return(
        <>
            <SearchBar tweetFilter={tweetFilter}></SearchBar>
        </>
    )
}
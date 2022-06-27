import { SearchBar } from "./SearchBar"


export const TweetSearchResult = (props) => {

    return(
        <>
            <SearchBar tweetFilter={props.tweetFilter} tweetCheckLocal={props.tweetCheckLocal}></SearchBar>
        </>
    )
}
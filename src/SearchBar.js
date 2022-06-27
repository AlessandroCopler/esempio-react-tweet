import { useState } from "react"


export const SearchBar = (props) => {
    const [tweetFilter, setTweetFilter] = useState(props.tweetFilter)

    function updateTweetFilter(e) {
        setTweetFilter(e.target.value)
        console.log(tweetFilter)
    }

    return(
        <>
            <input type="text" name="Prova" onChange={updateTweetFilter}></input>
        </>
    )
}
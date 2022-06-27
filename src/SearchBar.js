import { useState } from "react"


export const SearchBar = (props) => {
    
    const [tweetFilter, setTweetFilter] = useState(props.tweetFilter)
    const [tweetCheckLocal, setCheckLocal] = useState(props.tweetCheckLocal)

    function updateTweetFilter(e) {
        setTweetFilter(e.target.value)
        console.log(tweetFilter)
    }

    function updateCheckbox(e) {
        setCheckLocal(e.currentTarget.checked)
        console.log(tweetCheckLocal)
    }

    return(
        <>
            <input type="text" name="Search" onChange={updateTweetFilter}></input>
            <input type="checkbox" name="Solo tweet locali?" onClick={updateCheckbox}></input>
        </>
    )
}


export const SearchBar = (props) => {
    
    const {setCheckLocal,setTweetFilter} = props

    function updateTweetFilter(e) {
        setTweetFilter(e.target.value)
        
    }

    function updateCheckbox(e) {
        setCheckLocal(e.currentTarget.checked)
    }

    return(
        <>
            <input type="text" name="Search" onChange={updateTweetFilter}></input>
            <input type="checkbox" name="Solo tweet locali?" onClick={updateCheckbox}></input>
        </>
    )
}
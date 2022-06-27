

export const TweetRow = (props) => {

    const {tweet} = props

    return(
        <>
            <div>
                <span>{tweet.text}</span>
                <span>{tweet.number}</span>
            </div>
        </>
    )
}
import moment from "moment"

function CommentCard({comment}) {

    const dateAndTime = comment.created_at.split("T")
    const time = dateAndTime[1].split(":")
    const date = dateAndTime[0].split("-")
    
    return (
        <section className="comment-card">
            <p>{comment.body}</p>
            <p>posted by {comment.author}</p>
            <p>at {time[0]}:{time[1]} on {date[2]}-{date[1]}-{date[0]}</p>
            <p>{comment.votes} votes</p>
            <button></button>
        </section>
    )
}

export default CommentCard
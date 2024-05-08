

function CommentCard({comment}) {
    
    return (
        <>
        <section>
            <p>{comment.body}</p>
            <p>posted by {comment.author} at {comment.created_at}</p>
            <p>{comment.votes} votes</p>
        </section>
        </>
    )
}

export default CommentCard
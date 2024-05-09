import CommentCard from "./CommentCard"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { fetchCommentsByArticleId, postCommentOnArticle } from "./api"

function Comments({article}) {
    const {article_id} = useParams()
    const [articleComments, setArticleComments] = useState([])
    const [commentText, setCommentText] = useState("")
    const [newComment, setNewComment] = useState({})
    const [isCommentButtonDisabled, setCommentButtonDisabled] = useState(false)

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((res) => {
            setArticleComments(res.data.comments)
        })
    }, [article_id])

    function handleChange(event) {
        setCommentText(event.target.value)
    }

    function disableCommentButton() {
        setCommentButtonDisabled(true)
    }

    function handleSubmit(event) {
        event.preventDefault()
        postCommentOnArticle(article_id, commentText).then(() => {
            setCommentText("")
            fetchCommentsByArticleId(article_id).then((res) => {
                setArticleComments(res.data.comments)
            })
            disableCommentButton()
        })
    }

    return (
        <section>
            <form className="comment-form" onSubmit={handleSubmit}>
                <label className="comment-label">comment:</label>
                <input name="body"
                className="comment-body"
                type="text"
                id="comment-body"
                placeholder="Type your comment here..."
                value={newComment.body}
                onChange={handleChange}></input>
                <button className="button" type="submit" disabled={isCommentButtonDisabled}>Post comment</button>
            </form>
            <p className="vertical" >{article.comment_count} comments</p>
            <ul id="vertical-list">
                {articleComments.map((comment) => {
                    return (
                            <CommentCard key={comment.comment_id} comment={comment}/>
                    )})}
            </ul>
            </section>
    )
}

export default Comments
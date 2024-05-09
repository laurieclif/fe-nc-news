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
    const [isLoading, setIsLoading] = useState(false)
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((res) => {
            setArticleComments(res.data.comments)
        })
    }, [article_id, refresh])

    function handleChange(event) {
        setCommentText(event.target.value)
    }

    function disableCommentButton() {
        setCommentButtonDisabled(true)
    }

    function handleSubmit(event) {
        event.preventDefault()
        disableCommentButton()
        setIsLoading(true)
        postCommentOnArticle(article_id, commentText)
        .then(() => {
            setCommentText("")
            setIsLoading(false)
            setRefresh(Math.random)
            setCommentButtonDisabled(false)
            fetchCommentsByArticleId(article_id).then((res) => {
                setArticleComments(res.data.comments)
            })
        })
    }

    return isLoading ? (
        <p>Loading...</p> ) : (
        <section>
            <form className="comment-form" onSubmit={handleSubmit}>
                <label className="comment-label" htmlFor="comment-body">comment:</label>
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
                            <CommentCard key={comment.comment_id} comment={comment} setRefresh={setRefresh} isLoading={isLoading} setIsLoading={setIsLoading}/>
                    )})}
            </ul>
            </section>
    )
}

export default Comments
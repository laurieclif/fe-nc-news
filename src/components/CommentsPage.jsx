import { useEffect, useState } from "react"
import { fetchCommentsByArticleId } from "./api"
import DisplayBox from "./DisplayBox"
import CommentCard from "./CommentCard"
import { useParams } from "react-router"

function CommentsPage({article}) {
    const [articleComments, setArticleComments] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((res) => {
            setArticleComments(res.data.comments)
        })
    }, [article_id])

    return (
        <section id="vertical-list">
            <h2>Comments for </h2>
            <ul id="vertical-list">
                {articleComments.map((comment) => {
                    return (
                        <>
                        <DisplayBox key={comment.comment_id}>
                            <CommentCard className="comment-card" key={comment.comment_id} comment={comment}/>
                        </DisplayBox>
                        </>
                    )})}
            </ul>
        </section>
    )
}

export default CommentsPage
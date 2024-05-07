import { useEffect, useState } from "react"
import { fetchCommentsByArticleId } from "./api"

function CommentsPage(article_id) {
    const [articleComments, setArticleComments] = useState(0)

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((comments) => {
            console.log(comments)
            setArticleComments(comments.data)
        })
    }, [articleComments])

    return (
        <section ></section>
    )
}

export default CommentsPage
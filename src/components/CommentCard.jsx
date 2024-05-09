import { deleteCommentFromArticle } from "./api"
import { useParams } from "react-router"
import { useState, useContext } from "react"
import { UserLoginContext } from "../contexts/UserLogin"

function CommentCard({comment, setRefresh, isLoading, setIsLoading}) {

    const {comment_id} = comment
    const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false)
    const { loggedUser } = useContext(UserLoginContext)
    

    const dateAndTime = comment.created_at.split("T")
    const time = dateAndTime[1].split(":")
    const date = dateAndTime[0].split("-")

    function disableDeleteButton() {
        setIsDeleteButtonDisabled(true)
    }

    function handleDelete(event) {
        event.preventDefault()
        disableDeleteButton()
        setIsLoading(true)
            deleteCommentFromArticle(comment.comment_id)
            .then(() => {
                setIsLoading(false)
                setRefresh(Math.random) 
             })
             .catch((err) => {
                console.log(err)
             })
    }
    
    return isLoading ? (
        <p>Loading...</p> ) : (
        <section className="comment-card">
            <p>{comment.body}</p>
            <p>posted by {comment.author}</p>
            <p>at {time[0]}:{time[1]} on {date[2]}-{date[1]}-{date[0]}</p>
            <p>{comment.votes} votes</p>
           {loggedUser===comment.author && <button className="button" onClick={handleDelete} disabled={isDeleteButtonDisabled}>Delete comment</button>}
        </section>
    )
}

export default CommentCard
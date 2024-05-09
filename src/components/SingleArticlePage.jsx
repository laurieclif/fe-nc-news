import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { patchVoteOnArticle, fetchArticleById, fetchCommentsByArticleId, postCommentOnArticle } from "./api"
import Comments from "./Comments"

function SingleArticlePage() {
    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    const [voteChange, setVoteChange] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchArticleById(article_id).then((res) => {
            setArticle(res.data.article)
        })
        .then(() => {
            setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }, [article_id])


    function handleVote(vote) {
        patchVoteOnArticle(article_id, vote)
        .catch((err) => {
            console.log(err)
        })
        setVoteChange(vote)
    }


    return isLoading ? (
        <p>Loading...</p> ) : (
        <section id="single-article">
            <h1>{article.title}</h1>
            <p>Topic: {article.topic}</p>
            <img src={article.article_img_url} alt="article thumbnail image"></img>
            <p>{article.body}</p>
            <p>Written by {article.author}</p>
            <p>posted at: {article.created_at}</p>
            <button className="button" disabled={voteChange === 1} onClick={() => handleVote(1)}>vote up ⬆️</button>
            <p className="vertical" >{article.votes + voteChange} votes</p>
            <button className="button" disabled={voteChange === -1} onClick={() => handleVote(-1)}>vote down ⬇️</button>
            <Comments article={article}/>
        </section>
    )
}

export default SingleArticlePage
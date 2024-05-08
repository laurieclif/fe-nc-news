import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { patchVoteOnArticle, fetchArticleById } from "./api"

function SingleArticlePage() {
    const {article_id} = useParams()
    const [article, setArticle] = useState([])
    const [voteChange, setVoteChange] = useState(0)

    useEffect(() => {
        fetchArticleById(article_id).then((article) => {
            setArticle(article.data.article)
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

    // add in isLoading state?
    if(!article){
        return <p>Loading...</p>
    }

    return (
        <section id="single-article">
            <h1>{article.title}</h1>
            <p>Topic: {article.topic}</p>
            <img src={article.article_img_url} alt="article thumbnail image"></img>
            <p>{article.body}</p>
            <p>Written by {article.author}</p>
            <Link className="vertical" to={`/articles/${article_id}/comments`} article={article}>{article.comment_count} comments</Link>
            <p>posted at: {article.created_at}</p>
            <button className="button" disabled={voteChange === 1} onClick={() => handleVote(1)}>vote up ⬆️</button>
            <p className="vertical" >{article.votes + voteChange} votes</p>
            <button className="button" disabled={voteChange === -1} onClick={() => handleVote(-1)}>vote down ⬇️</button>
        </section>
    )
}

export default SingleArticlePage
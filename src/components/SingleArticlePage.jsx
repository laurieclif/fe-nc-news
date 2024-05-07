import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchArticleById } from "./api"

function SingleArticlePage() {
    const {article_id} = useParams()
    const [article, setArticle] = useState([])

    useEffect(() => {
        fetchArticleById(article_id).then((article) => {
            setArticle(article.data.article)
        })
        .catch((err) => console.log(err))
    }, [article_id])

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
            <p className="vertical" >{article.votes} votes</p>
            <Link className="vertical" to={`/articles/${article_id}/comments`} article_id={article_id}>{article.comment_count} comments</Link>
            <p>posted at: {article.created_at}</p>
        </section>
    )
}

export default SingleArticlePage
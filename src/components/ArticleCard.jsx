import { Link } from "react-router-dom"

function ArticleCard({article}) {

    return (
        <>
        <Link className="link" to={`/articles/${article.article_id}`}>
        <section>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt="article thumbnail image"></img>
            <p>Topic: {article.topic}</p>
            <p>Written by {article.author}</p>
            <p>{article.votes} votes</p>
            <p>{article.comment_count} comments</p>
        </section>
        </Link>
        </>
    )
}

export default ArticleCard
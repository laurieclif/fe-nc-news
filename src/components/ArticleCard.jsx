import { Link } from "react-router-dom"

function ArticleCard({article}) {
    //const {article_id} = article

    return (
        <>
        <Link to={`/articles/${article_id}`}></Link>
        <section>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt="article thumbnail image"></img>
            <p>Topic: {article.topic}</p>
            <p>Written by {article.author}</p>
            <p>{article.votes} votes</p>
            <Link className="link" to="/articles/:article_id/comments">{article.comment_count} comments</Link>
        </section>
        </>
    )
}

export default ArticleCard
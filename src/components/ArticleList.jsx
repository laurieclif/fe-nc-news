import { useState, useEffect } from "react"
import { fetchArticleData } from "./api"
import ArticleCard from "./ArticleCard"
import DisplayBox from "./DisplayBox"

function ArticleList() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticleData().then((articleData) => {
            setArticles(articleData.data.articles)
        })
    }, [articles])

    return (
        <section id="article-list">
            <h2>Articles</h2>
            <ul id="article-list">
                {articles.map((article) => {
                    return <Link className="link" to="/articles/:article_id">
                        <DisplayBox key={article.article_id}>
                        <ArticleCard className="article-card" key={article.article_id} article={article} />
                    </DisplayBox>
                    </Link>
                })}
            </ul>
        </section>
    )
}

export default ArticleList
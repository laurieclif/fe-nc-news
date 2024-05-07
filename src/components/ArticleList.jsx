import { useState, useEffect } from "react"
import { fetchArticleData } from "./api"
import ArticleCard from "./ArticleCard"
import DisplayBox from "./DisplayBox"
import { Link } from "react-router-dom"

function ArticleList() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticleData().then((articleData) => {
            setArticles(articleData.data.articles)
        })
    }, [])

    return (
        <section id="article-list">
            <h2>Articles</h2>
            <ul id="article-list">
                {articles.map((article) => {
                    return 
                        <DisplayBox key={article.article_id}>
                        <ArticleCard className="article-card" key={article.article_id} article={article} />
                    </DisplayBox>
                })}
            </ul>
        </section>
    )
}

export default ArticleList
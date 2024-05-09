import { useState, useEffect } from "react"
import { fetchArticleData } from "./api"
import ArticleCard from "./ArticleCard"
import DisplayBox from "./DisplayBox"

function ArticleList() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchArticleData().then((res) => {
            setArticles(res.data.articles)
        })
        .then(() => {
            setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }, [])

    return isLoading ? (
        <p>Loading...</p> ) : (
        <section id="vertical-list">
            <h2>Articles</h2>
            <ul id="vertical-list">
                {articles.map((article) => {
                    return (
                        <>
                        <DisplayBox key={article.article_id}>
                        <ArticleCard className="article-card" key={article.article_id} article={article} />
                    </DisplayBox>
                    </>
                )})}
            </ul>
        </section>
    )
}

export default ArticleList
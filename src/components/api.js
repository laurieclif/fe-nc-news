import axios from "axios"

export function fetchArticleData() {
    return axios
    .get("https://be-nc-news-project.onrender.com/api/articles")
    .catch((err) => console.log(err))
}

export function fetchArticleById(article_id) {
    return axios
    .get(`https://be-nc-news-project.onrender.com/api/articles/${article_id}`)
    .catch((err) => console.log(err))
}
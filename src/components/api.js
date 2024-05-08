import axios from "axios"

export function fetchArticleData() {
    return axios
    .get("https://be-nc-news-project.onrender.com/api/articles")
}

export function fetchArticleById(article_id) {
    return axios
    .get(`https://be-nc-news-project.onrender.com/api/articles/${article_id}`)
}

export function fetchCommentsByArticleId(article_id) {
    console.log(article_id)
    return axios
    .get(`https://be-nc-news-project.onrender.com/api/articles/${article_id}/comments`)
}
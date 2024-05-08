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
    return axios
    .get(`https://be-nc-news-project.onrender.com/api/articles/${article_id}/comments`)
}

export function patchVoteOnArticle(article_id, vote) {
    return axios
    .patch(`https://be-nc-news-project.onrender.com/api/articles/${article_id}`, {inc_votes: vote})
}
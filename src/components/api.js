import axios from "axios"

export function fetchArticleData(slug) {
    let url = "https://be-nc-news-project.onrender.com/api/articles"
    if(slug){
       url += `?topic=${slug}`
    }
    return axios
    .get(url)
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

export function postCommentOnArticle(article_id, commentText) {
    return axios
    .post(`https://be-nc-news-project.onrender.com/api/articles/${article_id}/comments`, {author: "grumpy19",
    body: commentText})
}

export function deleteCommentFromArticle(comment_id) {
    return axios
    .delete(`https://be-nc-news-project.onrender.com/api/comments/${comment_id}`)
}

export function fetchTopics() {
    return axios
    .get("https://be-nc-news-project.onrender.com/api/topics")
}
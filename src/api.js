import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-acw.onrender.com"
});

export const fetchArticles = () => {
    return api.get(
        "https://nc-news-acw.onrender.com/api/articles"
    ).then((response) => {
        return response;
    })
}

export const fetchSingleArticle = (article_id) => {
    return api.get(
        `https://nc-news-acw.onrender.com/api/articles/${article_id}`
    ).then((response) => {
        return response;
    })
}
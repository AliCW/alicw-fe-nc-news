import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-acw.onrender.com",
});

export const fetchArticles = () => {
  return api
    .get("https://nc-news-acw.onrender.com/api/articles")
    .then((response) => {
      return response;
    });
};

export const fetchSingleArticle = (article_id) => {
  return api
    .get(`https://nc-news-acw.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response;
    });
};

export const fetchSingleArticleComments = (article_id) => {
  return api
    .get(`https://nc-news-acw.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
      return response;
    });
};

export const incVote = (article_id) => {
    const patchBody = {
        inv_votes: 1,
    }
  return api
    .patch(
      `https://nc-news-acw.onrender.com/api/articles/${article_id}`, patchBody
    )
    .then((response) => {
      return response;
    });
};

export const decVote = (article_id) => {
  const patchBody = {
      inv_votes: -1,
  }
return api
  .patch(
    `https://nc-news-acw.onrender.com/api/articles/${article_id}`, patchBody
  )
  .then((response) => {
    return response;
  });
};

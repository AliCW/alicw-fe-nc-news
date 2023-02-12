import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-acw.onrender.com",
});

export const fetchArticles = () => {
  return api
    .get(`https://nc-news-acw.onrender.com/api/articles`)
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

export const fetchArticlesByQuery = (query) => {
  return api
    .get(`https://nc-news-acw.onrender.com/api/articles?sort_by=${query}`)
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

export const postArticleComment = (commentData, article_id) => {
  return api
    .post(
      `https://nc-news-acw.onrender.com/api/articles/${article_id}/comments`, commentData
    ) 
    .then((response) => {
      return response;
    })
}

export const fetchTopics = () => {
  return api.get("https://nc-news-acw.onrender.com/api/topics")
  .then((response) => {
      return response;
    });
}

export const fetchArticleByTopic = (slug) => {
  return api.get(
    `https://nc-news-acw.onrender.com/api/articles?topic=${slug}`
  )
  .then((response) => {
    return response;
  })
}

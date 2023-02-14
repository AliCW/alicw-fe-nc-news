import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import * as api from '../api'
import TopicNav from './TopicNav'

export default function ArticlesByTopic() {
  const [articles, selectArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true)
    api.fetchArticleByTopic(slug).then(({data}) => {
      selectArticles(data.articles)
      setIsLoading(false)
    })
  }, [slug]
  )

  if (isLoading) {
    return <p className="loading">Loading...</p>
}

  return (
    <div>
    {<TopicNav />}  
    {articles.map((article) => {
      return (
        <div key={article.article_id} className="article">
           <Link to={"/article/" + article.article_id} state={{id: article.article_id}} className="article-header">{article.title}</Link>
           <p className="article-details">author: {article.author}</p>
           <p className="article-details">topic: {article.topic}</p>
           <p className="article-details">comments: {article.comments_count}</p>
           <p className="article-details">votes: {article.votes}</p>
           <p className="article-details">created: {article.created_at.slice(0, 10)}</p>
        </div>
      )
    })}
     </div>
  );
};
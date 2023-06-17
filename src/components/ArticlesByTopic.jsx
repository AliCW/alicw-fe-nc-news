import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom"
import { BeatLoader } from "react-spinners";
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
    return <BeatLoader className="page-loader" />
}

  return (
    <div>
    {<TopicNav />}  
    {articles.map((article) => {
      return (
        <div key={article.article_id} >
           <Link to={"/article/" + article.article_id} state={{id: article.article_id}} >{article.title}</Link>
           <p >author: {article.author}</p>
           <p >topic: {article.topic}</p>
           <p >comments: {article.comments_count}</p>
           <p ></p>
           <p >created: {article.created_at.slice(0, 10)}</p>
        </div>
      )
    })}
     </div>
  );
};
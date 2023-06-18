import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom"
import { BeatLoader } from "react-spinners";
import * as api from '../api'

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
    {/* {<TopicNav />}   */}
    {articles.map((article) => {
      return (
        <div key={article.article_id} className="map-div">
           <Link to={"/article/" + article.article_id} state={{id: article.article_id}} className="map-title">{article.title}</Link>
           <p className="map-disc">author: {article.author}</p>
           <p className="map-disc">topic: {article.topic}</p>
           <p className="map-disc">comments: {article.comments_count}</p>
           <p className="map-disc">created: {article.created_at.slice(0, 10)}</p>
        </div>
      )
    })}
     </div>
  );
};
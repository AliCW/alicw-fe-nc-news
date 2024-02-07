import { useState, useEffect, useContext } from "react";
import { Link, useParams} from "react-router-dom"
import { BeatLoader } from "react-spinners";
import * as api from '../api'
import { SignInContext } from "../contexts/SignInContext"

export default function ArticlesByTopic() {
  const [articles, selectArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { setOpenSignIn } = useContext(SignInContext);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true)
    api.fetchArticleByTopic(slug).then(({data}) => {
      selectArticles(data.articles)
      setIsLoading(false)
    })
  }, [slug]
  )

  const disableDropdown = () => {
    setOpenSignIn(false);
};

  if (isLoading) {
    return (
      <div>
          <BeatLoader className="page-loader" />
          <p className="page-loader">Free instance's spin down with inactivity, initial requests can be delayed by 50 seconds or more.</p>
      </div>
  )
}

  return (
    <div onClick={disableDropdown} className="disable-dropdown">
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
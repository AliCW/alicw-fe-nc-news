import { Link } from "react-router-dom"
import capitaliseFirstLetter from '../utilities/capitaliseFirstLetter';

export default function ArticleCard({ articles }) {
    return (
        <div>
            {articles.map((article) => {
                return (
                    <div key={article.article_id} className="article">
                        <Link to={"/article/" + article.article_id} state={{ id: article.article_id }} className="article-header">{article.title}</Link>
                        <p className="article-details">Author: {article.author}</p>
                        <p className="article-details">Topic: {capitaliseFirstLetter(article.topic)}</p>
                        <p className="article-details">Comments: {article.comments_count}</p>
                        <p className="article-details">Votes: {article.votes}</p>
                        <p className="article-details">Created: {article.created_at.slice(0, 10)}</p>
                    </div>
                )
            })}
        </div>
    )
}
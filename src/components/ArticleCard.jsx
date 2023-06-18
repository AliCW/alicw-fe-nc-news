import { Link } from "react-router-dom"
import capitaliseFirstLetter from '../utilities/capitaliseFirstLetter';

export default function ArticleCard({ articles }) {
    return (
        <div>
            {articles.map((article) => {
                return (
                    <div key={article.article_id} className="map-div">
                        <Link to={"/article/" + article.article_id} state={{ id: article.article_id }} className="map-title">{article.title}</Link>
                        <p className="map-disc">Author: {article.author}</p>
                        <p className="map-disc">Topic: {capitaliseFirstLetter(article.topic)}</p>
                        <p className="map-disc">Comments: {article.comments_count}</p>
                        <p className="map-disc">Votes: {article.votes}</p>
                        <p className="map-disc">Created: {article.created_at.slice(0, 10)}</p>
                    </div>
                )
            })}
        </div>
    )
}
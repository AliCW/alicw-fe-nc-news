import { Link } from "react-router-dom"
import capitaliseFirstLetter from '../utilities/capitaliseFirstLetter';

export default function ArticleCard({ articles }) {
    return (
        <div>
            {articles.map((article) => {
                return (
                    <div key={article.article_id} >
                        <Link to={"/article/" + article.article_id} state={{ id: article.article_id }} className="article-header">{article.title}</Link>
                        <p >Author: {article.author}</p>
                        <p >Topic: {capitaliseFirstLetter(article.topic)}</p>
                        <p >Comments: {article.comments_count}</p>
                        <p >Votes: {article.votes}</p>
                        <p >Created: {article.created_at.slice(0, 10)}</p>
                    </div>
                )
            })}
        </div>
    )
}
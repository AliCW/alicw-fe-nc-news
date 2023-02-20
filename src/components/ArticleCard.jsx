import { Link } from "react-router-dom"

export default function ArticleCard({ articles }) {
    return (
        <div>
            {articles.map((article) => {
                return (
                    <div key={article.article_id} className="article">
                        <Link to={"/article/" + article.article_id} state={{ id: article.article_id }} className="article-header">{article.title}</Link>
                        <p className="article-details">author: {article.author}</p>
                        <p className="article-details">topic: {article.topic}</p>
                        <p className="article-details">comments: {article.comments_count}</p>
                        <p className="article-details">votes: {article.votes}</p>
                        <p className="article-details">created: {article.created_at.slice(0, 10)}</p>
                    </div>
                )
            })}
        </div>
    )
}
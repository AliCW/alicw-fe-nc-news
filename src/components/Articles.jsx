import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import * as api from '../api'
import TopicNav from './TopicNav'

export default function Articles() {
    const [articles, selectArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        api.fetchArticles().then(({data}) => {
            selectArticles(data.articles)
            setIsLoading(false)
        })
    }, []
    )

    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    // if (queryByVote) {
    //     return <p>here, right here</p>
    // }

    //re-map the articles array depending on the query

    return (
        <div className="article">
            {<TopicNav />}
        {articles.map((article) => {
            return (
                <div>
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
    )
}

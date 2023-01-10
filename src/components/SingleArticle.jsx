import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import * as api from '../api'

export default function SingleArticle () {
    const [article, selectArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        setIsLoading(true)
        api.fetchSingleArticle(id).then(({data}) => {
            selectArticle(data.article.article[0])
            setIsLoading(false)
        })
    }, [id]
    )

    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    const path = "/article/" + id + "/comments"

    return (
        <div className="article">
            <h3 className="article-header">{article.title}</h3>
            <p className="article-body">{article.body}</p>
            <p className="article-details">author: {article.author}</p>
            <p className="article-details">topic: {article.topic}</p>
            <p className="article-details">comments: <Link to={path} state={{id: article.article_id}}>{article.comment_count}</Link></p>
            <p className="article-details">votes: {article.votes}</p>
            <p className="article-details">created: {String(article.created_at).slice(0, 10)}</p>
        </div>
    )
}

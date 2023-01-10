import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import SingleArticleComments from "./SingleArticleComments"
import * as api from '../api'

export default function SingleArticle () {
    const [article, selectArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { article_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        api.fetchSingleArticle(article_id).then(({data}) => {
            selectArticle(data.article.article[0])
            setIsLoading(false)
        })
    }, [article_id]
    )

    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    return (
        <div className="article" key={article.article_id}>
            <h3 className="article-header">{article.title}</h3>
            <p className="article-body">{article.body}</p>
            <p className="article-details">author: {article.author}</p>
            <p className="article-details">topic: {article.topic}</p>
            <p className="article-details">votes: {article.votes}</p>
            <p className="article-details">created: {String(article.created_at).slice(0, 10)}</p>
            <p className="article-details">{article.comment_count} comments:</p>       
            <SingleArticleComments article={article_id}></SingleArticleComments>
        </div>
    )
}


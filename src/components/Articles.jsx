import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import * as api from '../api'
import QueryNav from './QueryNav'
import TopicNav from './TopicNav'

export default function Articles() {
    const [articles, selectArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState('')
    const [orderBy, setOrderBy] = useState('')

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

    //re-map the articles array depending on the query
    //use this element to gather query details & render on a seperate element??
    //keep the state here and send over to new component

    return (
        <div className="article">
            {<TopicNav />}
            {<QueryNav state={sortBy} />}
        {articles.map((article) => {
            return (
                <div key={article.article_id}>
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

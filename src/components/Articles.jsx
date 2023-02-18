import { useState, useEffect } from "react";
import * as api from '../api'
import TopicNav from './TopicNav'

import ArticleCard from './ArticleCard'

export default function Articles() {
    const [query, selectQuery] = useState('created_at')
    const [order, selectOrder] = useState('ASC')
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
    
    const handleSubmit = (event) => {
        event.preventDefault();
        selectArticles([])
        setIsLoading(true)
        api.fetchArticlesByQuery(query, order).then(({data}) => {

                selectArticles(data.articles)
                setIsLoading(false)
            })

        }
        
        if (isLoading) {
            return <p className="loading">Loading...</p>
        }

    return (
        <div className="article">
            {<TopicNav />}
            <div key="query-nav">
                <form className="article-search" onSubmit={handleSubmit}>
                    <nav className="query-nav">

                        <label>Sort By:</label>
                        <select onChange={(event) => { selectQuery(event.target.value) }}
                            defaultValue={query}
                        >
                            <option value="votes">Votes</option>
                            <option value="author">Author</option>
                            <option value="created_at">Date</option>

                        </select>
                        <label>Order by:</label>

                        <select onChange={(event) => { selectOrder(event.target.value) }}
                            defaultValue={order}
                        >
                            <option value="ASC">asc</option>
                            <option value="DESC">desc</option>
                        </select>
                        <input type="submit" value="Submit" />

                    </nav>
                </form>
                {<ArticleCard articles={articles} />}
            </div>
        </div>
    )
}


import { useState, useEffect } from "react";
import * as api from '../api'
import TopicNav from './TopicNav'
import ArticleCard from './ArticleCard'
import orderByCommentCountAsc from "../utilities/orderByCommentCount";


export default function Articles() {
    const [query, selectQuery] = useState('created_at')
    const [order, selectOrder] = useState('ASC')
    const [comments, selectCommentsOrder] = useState(false)
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
            if (comments === true) {
                selectArticles(orderByCommentCountAsc(data.articles))
                selectCommentsOrder(false)                
            } else {
            if (comments === false) {
                selectArticles(data.articles)
                }
            }
            setIsLoading(false)
            })
        }
    
    const handleClick = () => {
        if(comments === false) {
            selectCommentsOrder(true)
        } else {
            selectCommentsOrder(false)
        }
    }
        
        if (isLoading) {
            return <p className="loading">Loading...</p>
        }


    return (
        <div>
            {<TopicNav />}
            <div key="query-nav">
                <form className="article-search" onSubmit={handleSubmit}>
                    <h2>Filter:</h2>
                    <nav className="query-nav">
                        <div className="query-dropdown">
                        <label>Sort By: </label>
                        <br></br>

                        <select onChange={(event) => { selectQuery(event.target.value) }}
                            defaultValue={query}
                        >
                            <option value="votes">Votes</option>
                            <option value="author">Author</option>
                            <option value="created_at">Date</option>

                        </select>
                        <br></br>
                        <label>Order By: </label>
                        <br></br>
                        <select onChange={(event) => { selectOrder(event.target.value) }}
                            defaultValue={order}
                        >
                            <option value="ASC">Ascending</option>
                            <option value="DESC">Descending</option>
                        </select> 
                        <br></br>
                        </div>
                        <input type="checkbox" id="comment-checkbox" onClick={handleClick} className="comment-checkbox"></input>
                        <label className="comment-checkbox">Most Commented  </label>
                        
                        <input className="query-submit-button" type="submit" value="Search" />

                    </nav>
                </form>
                {<ArticleCard articles={articles} />}
            </div>
        </div>
    )
}


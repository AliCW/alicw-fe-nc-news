import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import * as api from '../api'
import ArticleCard from './ArticleCard'
import orderByCommentCountAsc from "../utilities/orderByCommentCountAsc";
import orderByCommentCountDesc from "../utilities/orderByCommentCountDesc";

export default function ArticlesByPage() {
    const [query, selectQuery] = useState('created_at')
    const [order, selectOrder] = useState('ASC')
    const [articles, selectArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        api.fetchArticlesPagination(pageNumber).then(({data}) => {
            selectArticles([])
            selectArticles((data.articles))
            setIsLoading(false)
        })
    }, [pageNumber]
    )
    
    const handleSubmit = (event) => {
        event.preventDefault();
        selectArticles([])
        setIsLoading(true)
        if (query === 'comments') {
            api.fetchArticlesByQuery('created_at', order).then(({data}) => {
                if(order === 'ASC') {
                    selectArticles(orderByCommentCountAsc(data.articles))          
                    setIsLoading(false)
                } else {
                if(order === 'DESC') {
                    selectArticles(orderByCommentCountDesc(data.articles))              
                    setIsLoading(false)  
                    }
                }
            })
        } else {
        if (query === 'votes') {
            api.fetchArticlesByQuery(query, order).then(({data}) => {
                selectArticles(orderByCommentCountAsc(data.articles))               
                setIsLoading(false)
            })
            } else {
                api.fetchArticlesByQuery(query, order).then(({ data }) => {
                    selectArticles(data.articles)
                    setIsLoading(false)
                })
            }
        }
    }

    const handleNextPage = (event) => {
        event.preventDefault();
        setIsLoading(true)
        setPageNumber(pageNumber + 1)
    }
    const handlePrevPage = (event) => {
        event.preventDefault();
        setIsLoading(true);
        setPageNumber(pageNumber - 1);
    }
    
    if (isLoading) {
        return <BeatLoader className="page-loader" />
    }

    return (

        <div key="query-nav">
            <form onSubmit={handleSubmit}>
                <h2 className="sub-header">Filter:</h2>
                <nav className="filter-nav">
                    <div>
                        <label className="filter-label">Sort By: </label>

                        <select onChange={(event) => { selectQuery(event.target.value) }}
                            defaultValue={query}
                            className="filter-select">

                            <option value="votes">Votes</option>
                            <option value="author">Author</option>
                            <option value="created_at">Date</option>
                            <option value="comments">Comments</option>
                        </select>
                        <br></br>
                        <label className="filter-label">Order By: </label>

                        <select onChange={(event) => { selectOrder(event.target.value) }}
                            defaultValue={order}
                            className="filter-select">
                            <option value="ASC">Ascending</option>
                            <option value="DESC">Descending</option>
                        </select>

                    </div>
                    <input type="submit" value="Search" className="filter-submit" />

                </nav>
            </form>
            {<ArticleCard articles={articles} />}
            <form className="filter-nav">
                {pageNumber <= 1 ?
                    <span></span>
                    :
                    <button className="filter-submit" onClick={handlePrevPage}>Prev</button>
                }
                <button className="filter-submit" onClick={handleNextPage}>Next</button>
            </form>
        </div>

    )
}

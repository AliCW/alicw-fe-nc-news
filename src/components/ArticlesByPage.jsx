import { useState, useEffect, useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import * as api from '../api'
import TopicNav from './TopicNav'
import ArticleCard from './ArticleCard'
import orderByCommentCountAsc from "../utilities/orderByCommentCountAsc";
import orderByCommentCountDesc from "../utilities/orderByCommentCountDesc";
import AddArticle from "./AddArticle";

export default function ArticlesByPage() {
    const { username } = useContext(UserContext)
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
        return <p>Loading...</p>
    }

    return (
        <div>
            {<TopicNav />}
            { username === '' ? 
                <span></span>
                :
                <AddArticle selectArticles={selectArticles} />
                }
            <div key="query-nav">
                <form onSubmit={handleSubmit}>
                    <h2>Filter:</h2>
                    <nav>
                        <div>
                        <label>Sort By: </label>
                        <br></br>
                        <select onChange={(event) => { selectQuery(event.target.value) }}
                            defaultValue={query}
                        >
                            <option value="votes">Votes</option>
                            <option value="author">Author</option>
                            <option value="created_at">Date</option>
                            <option value="comments">Comments</option>
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
                        <input type="submit" value="Search" /> 
                        
                    </nav>
                </form>
                {<ArticleCard articles={articles} />}
                <form>
                    { pageNumber <= 1 ? 
                        <span></span>
                        :
                        <button onClick={handlePrevPage}>Prev</button>
                    }
                    <button onClick={handleNextPage}>Next</button>    
                </form>
            </div>
        </div>
    )
}

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import SingleArticleComments from './SingleArticleComments'
import * as api from '../api'

export default function SingleArticle (props) {
    const [article, selectArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams()
    

    useEffect(() => {
        setIsLoading(true)
        api.fetchSingleArticle(article_id).then(({data}) => {
            selectArticle(data.article.article)
            setIsLoading(false)
        })
    }, [article_id]
    )

    const upVote = (article_id) => {

        selectArticle((article) => {
            return article.map((votes) => {
                return { ...votes, votes: article[0].votes + 1 }
            })
        })
        api.incVote(article_id).catch(() => {
            selectArticle((article) => {
                return article.map((votes) => {
                    return { ...votes, votes: article[0].votes - 1, error: "oops, something went wrong casting your vote. Please refresh & try again"}
                })
            })
        })
    }

    const downVote = (article_id) => {
        selectArticle((article) => {
            return article.map((votes) => {
                return { ...votes, votes: article[0].votes - 1 }
            })
        })
        api.decVote(article_id).catch(() => {
            selectArticle((article) => {
                return article.map((votes) => {
                    return { ...votes, votes: article[0].votes + 1, error: "oops, something went wrong casting your vote. Please refresh & try again"}  
                })
            })
        })
    }


    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    return (
        <div className="article" key={article[0].article_id}>
            <h3 className="article-header">{article[0].title}</h3>
            <p className="article-body">{article[0].body}</p>
            <p className="article-details">author: {article[0].author}</p>
            <p className="article-details">topic: {article[0].topic}</p>
            <p className="article-details">
                votes:
                <button className="vote-button" onClick={() => downVote(article[0].article_id)}>↓
                </button>
                {article[0].votes}
                <button className="vote-button" onClick={() => upVote(article[0].article_id)}>↑
                </button>
            </p>
            <p className="article-details">created: {String(article[0].created_at).slice(0, 10)}</p>
            <p className="article-details">{article[0].comment_count} comments:</p>

            {article[0].error}
            <SingleArticleComments article={article[0].article_id} user={props.user}></SingleArticleComments>
            
        </div>
    )
}

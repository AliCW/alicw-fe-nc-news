import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { UserContext } from '../contexts/UserContext';
import SingleArticleComments from './SingleArticleComments'
import * as api from '../api'

export default function SingleArticle () {
    const { username } = useContext(UserContext)
    const [article, selectArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [voteError, setVoteError] = useState(false)
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
        return <p >Loading...</p>
    }

    return (
        <IconContext.Provider value={{ color: "#cc00ff" }}>
        <div key={article[0].article_id}>
            <h3 >{article[0].title}</h3>
            <p >{article[0].body}</p>
            <p >Author: {article[0].author}</p>
            <p >Topic: {article[0].topic}</p>
            <p >Created: {String(article[0].created_at).slice(0, 10)}</p>
               <p >Comments: {article[0].comment_count}</p>
               <p >Votes:</p>
            {username === '' ? 
            <p>
                <BsFillHandThumbsDownFill disabled onClick={() => setVoteError(true)} />
                
                {article[0].votes}
                <BsFillHandThumbsUpFill disabled onClick={() => setVoteError(true)} />

            </p>
            :
            <p>
                <BsFillHandThumbsDownFill onClick={() => downVote(article[0].article_id)} />

                {article[0].votes}
                <BsFillHandThumbsUpFill onClick={() => upVote(article[0].article_id)} />

            </p>
            }
            {article[0].error}
            {voteError === true && <p>You need to be signed in to vote</p>}

            <SingleArticleComments article={article[0].article_id} user={username}></SingleArticleComments>
            
        </div>
        </IconContext.Provider>
    )
}

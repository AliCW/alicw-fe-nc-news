import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { BeatLoader } from "react-spinners";
import { FiXCircle, FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import { SignInContext } from "../contexts/SignInContext"
import SingleArticleComments from './SingleArticleComments'
import * as api from '../api'

export default function SingleArticle () {
    const { username } = useContext(UserContext)
    const { setOpenSignIn } = useContext(SignInContext);
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

    const disableDropdown = () => {
        setOpenSignIn(false);
    };

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
        return <BeatLoader className="page-loader" />
    }

    return (
        <div key={article[0].article_id} onClick={disableDropdown} className="disable-dropdown">
            <div className="map-div">
                <h3 className="sub-header">{article[0].title}</h3>
                <p className="map-disc">{article[0].body}</p>
                <br></br>
                <p className="map-details">Author: {article[0].author}</p>
                <p className="map-details">Topic: {article[0].topic}</p>
                <p className="map-details">Created: {String(article[0].created_at).slice(0, 10)}</p>
                <p className="map-details">Comments: {article[0].comment_count}</p>
                <p className="map-vote">Votes:</p>
                {username === '' ? 
                <p className="map-vote">
                    <FiThumbsDown className="map-vote-flex" disabled onClick={() => setVoteError(true)} />

                    {article[0].votes}

                    <FiThumbsUp className="map-vote-flex" disabled onClick={() => setVoteError(true)} />

                </p>
                :
                <p className="map-vote">
                    <FiThumbsDown className="map-vote-flex" onClick={() => downVote(article[0].article_id)}/>

                     {article[0].votes} 
                    <FiThumbsUp className="map-vote-flex" onClick={() => upVote(article[0].article_id)} />

                </p>
                }
            </div>
                {article[0].error}
                {voteError === true && <p className="signup-failure">You need to be signed in to vote <FiXCircle/></p>}
            <SingleArticleComments article={article[0].article_id} user={username}></SingleArticleComments>
            
        </div>
    )
}

import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { BeatLoader } from "react-spinners";
import { FiXCircle, FiCheckCircle } from "react-icons/fi"
import * as api from '../api'
import dateFormat from '../utilities/dateFormat';

export default function AddComment({ article, selectComments }) {
    const { username } = useContext(UserContext)
    const [newComment, setNewComment] = useState('');
    const [commentSubmit, setCommentSubmit] = useState(false)
    const [error, setError] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const id = article

    const handleSubmit = (event) => {
        setInvalid(false)
        event.preventDefault();

        if (newComment.length < 5) {
            setInvalid(true)
            return;
        }
        setIsLoading(true)
        setError(false)

        api.postArticleComment({"username": username, body: newComment}, id).then((response) => {
            const date = new Date();
            const today = date.toString().slice(4, 15);
                        
            const newComment = {
                author: username,
                body: response.data.postedComment[0].body,
                votes: 0,
                created_at: dateFormat(today),
                comment_id: response.data.postedComment[0].comment_id,
            }

        setIsLoading(false)
        handleComment(newComment)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
        }
    
    const handleComment = (newComment) => {
        setCommentSubmit(true);
        const timer = setTimeout(() => {
            setCommentSubmit(false);
            selectComments((currComments) => {
                return [newComment, ...currComments]
            })
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
    }

    if (commentSubmit) return <BeatLoader className="page-loader" />                              
    if (isLoading) return <BeatLoader className="page-loader" />
    if (error) return <p className="signup-failure">Error posting comment, please refresh try again <FiXCircle/></p>

    return (
        <div>
        <form onSubmit={handleSubmit}>

            {username === '' ? <textarea placeholder="You must be signed in to commment..." rows="5"
                id="newComment"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
            ></textarea>
            :
            <textarea placeholder="Post a comment..." rows="10"
                id="newComment"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
            ></textarea>}

            {username === '' ? <button disabled>Post</button>
            : 
            <button >Post</button>}      

        </form>
        {invalid === true && <p>Comment is not long enough</p>}
        </div>
    )
}

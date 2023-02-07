import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import * as api from '../api'


export default function AddComment({ article, selectComments }) {
    const [newComment, setNewComment] = useState('');
    const [commentSubmit, setCommentSubmit] = useState(false)
    const [error, setError] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    //console.log(article, selectComments)

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

        api.postArticleComment({username: "jessjelly", body: newComment}, id).then((response) => {
            console.log(response)
            const newComment = {
                author: 'jessjelly',
                body: response.data.postedComment[0].body,
                votes: 0,
                created_at: Date.now(),
                comment_id: response.data.postedComment[0].body,
            }
            selectComments((currComments) => {
                return [newComment, ...currComments]
            })
        setIsLoading(false)
        handleComment()
        
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
        }
    
    const handleComment = () => {
        setCommentSubmit(true);
        const timer = setTimeout(() => {
            setCommentSubmit(false);
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
    }
    if (commentSubmit)  return <p>Submitted!</p>
    if (isLoading) return <p>Posting...</p>

    return (
        <div>
        <form className="add-comment-form" onSubmit={handleSubmit}>
            
            <textarea className="add-comment-box"  placeholder="Post a comment..." rows="10"
                id="newComment"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
            ></textarea>
            <button className="post-button">
                Post
            </button>           
            
        </form>
        </div>
    )
}

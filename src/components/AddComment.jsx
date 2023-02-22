import { useState } from 'react';
import * as api from '../api'
import { dateFormat } from '../utilities/dateFormat';

export default function AddComment({ article, selectComments }) {
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

        api.postArticleComment({username: "jessjelly", body: newComment}, id).then((response) => {
            const date = new Date();
            const today = date.toString().slice(4, 15);
                        
            const newComment = {
                author: 'jessjelly',
                body: response.data.postedComment[0].body,
                votes: 0,
                created_at: dateFormat(today),
                comment_id: response.data.postedComment[0].comment_id,
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



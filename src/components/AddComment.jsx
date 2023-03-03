import { useState, useContext } from 'react';
import * as api from '../api'
import { dateFormat } from '../utilities/dateFormat';
import { UserContext } from '../contexts/UserContext';

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
        document.getElementById("newComment").reset()
        const timer = setTimeout(() => {
            setCommentSubmit(false);
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
    }

    if (commentSubmit)  return <p>Submitted!</p>
    if (isLoading) return <p>Posting...</p>
    if (error) return <p>Error posting comment, please refresh try again</p>

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



import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import * as api from '../api'

export default function CommentCard (comment) {
    const { username } = useContext(UserContext)
    const [deleteError, setDeleteError] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    
    const handleClick = (comment) => {
        setIsDeleting(true);
        setDeleteError(false);
        api.deleteCommentByCommentId(comment.comment.comment_id).then(() => {
            comment.setComments((currComments) => {
                return currComments.filter((item) => {
                    return item.comment_id !== comment.comment.comment_id;
                })
            })   
            setIsDeleting(false);
            handleDelete();
        })
        .catch(() => {
            setDeleteError(true);
        })
    }

    const handleDelete = () => {
        setIsDeleted(true);
        const timer = setTimeout(() => {
            setIsDeleted(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
            
    }

    if(isDeleted) return <p>Deleted Successfully</p>
    if(isDeleting) return <p>Deleting...</p>
    if(deleteError) return <p>Comment not deleted, refresh & try again</p>

    return (
    <div >
        <div  key={comment.comment.comment_id} >
            <h3 >{comment.comment.author}:</h3>
            <p >{comment.comment.body}</p>
            <p >Votes: {comment.comment.votes}</p>
            <p >Posted At: {String(comment.comment.created_at).slice(0, 10)}</p>
            {comment.comment.author === username &&   
            <button onClick={() => handleClick(comment)} >Delete
            </button>}
        </div >
    </div>
    )
}
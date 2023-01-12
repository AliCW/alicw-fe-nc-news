import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import * as api from '../api'

export default function AddComment(props) {
    const [newComment, setNewComment] = useState('');



    //add in similar functionality to that of the vote increase
    //optimisitcally render the new comment to the comment list
    //

    //postArticleComment
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newComment)
    }

    return (
        <form className="add-comment-form" onSubmit={handleSubmit}>
        
            <textarea className="add-comment-box"  placeholder="Post a comment..." rows="10"
                id="newComment"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
            ></textarea>
            <button>Post</button>
        </form>
    )
}
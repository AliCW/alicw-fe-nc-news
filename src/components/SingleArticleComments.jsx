import { useState, useEffect } from "react";
import * as api from '../api'
import AddComment from './AddComment'
import CommentCard from './CommentCard'
import DeleteCommentCheck from "./DeleteCommentCheck"

export default function SingleArticleComments (props) {
    const [comments, selectComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const id = props.article

    
   

    useEffect(() => {
        setIsLoading(true)
        api.fetchSingleArticleComments(id).then(({data}) => {
            selectComments(data.comments)
            setIsLoading(false)
        })
    }, [id]
    )

    function deleteClick(commentId) {
        

        api.deleteCommentByUsername(commentId).then(() => {
            
            

            
        })
    }

    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    return (
        <section>
        <AddComment article={id} selectComments={selectComments}/>
        {comments.map((comment) => {
            console.log(comment.comment_id)
            return (
                
                <div key={comment.comment_id}>
                <CommentCard 
                comment={comment} user={props.user} stateComments={comments} setComments={selectComments} />    
                   {comment.author === props.user.username &&   
                            <button className="delete-button" onClick={() => deleteClick(comment.comment_id)} >Delete
                            </button>
                        
                // <DeleteCommentCheck author={comment.author} user={props.user.username} commentId={comment.comment_id} setComments={comment.setComments} stateComments={comment.stateComments} />       
                   }
                </div>
                )

            })
        }
        </section>
    )
}

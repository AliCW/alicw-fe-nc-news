

export default function CommentCard (comment) {
    
    return (
    <div>

        <div className = "comment" key={comment.comment.comment_id} >
            <h3 className="comment-header">{comment.comment.author}:</h3>
            <p className="comment-body">{comment.comment.body}</p>
            <p className="comment-details">votes: {comment.comment.votes}</p>
            <p className="comment-details">posted at: {String(comment.comment.created_at).slice(0, 10)}</p>
        </div >
        
    
    </div>
    )
}


//send the login username id into this element
//if authors match, render the delete button
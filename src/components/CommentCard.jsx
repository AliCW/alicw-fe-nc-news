
export default function CommentCard ({comment}) {
    const { author, body, comment_id, created_at, votes } = comment;
    
    return (

        <div className = "comment" key={comment_id} >
            <h3 className="comment-header">{author}:</h3>
            <p className="comment-body">{body}</p>
            <p className="comment-details">votes: {votes}</p>
            <p className="comment-details">posted at: {String(created_at).slice(0, 10)}</p>
        </div >
        )

}

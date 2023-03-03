import { useState, useEffect, useContext } from "react";
import * as api from '../api'
import AddComment from './AddComment'
import CommentCard from './CommentCard'
import { UserContext } from '../contexts/UserContext'

export default function SingleArticleComments (props) {
    const { username } = useContext(UserContext)
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

    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    return (
        <section>
        <AddComment article={id} selectComments={selectComments}/>
        {comments.map((comment) => {
            return (
                <div key={comment.comment_id}>
                <CommentCard 
                comment={comment} user={username} stateComments={comments} setComments={selectComments} />   
                </div>
                )
            })
        }
        </section>
    )
}

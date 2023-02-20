import { useState, useEffect } from "react";
import * as api from '../api'
import AddComment from './AddComment'
import CommentCard from './CommentCard'

export default function SingleArticleComments (props) {
    const [comments, selectComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const id = props.article

   //console.log(props, '<<<')

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
                <CommentCard key={comment.comment_id} comment={comment} user={props.user} setComments={selectComments} />               
                )
            })
        }
        </section>
    )
}

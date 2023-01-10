import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

import * as api from '../api'

export default function SingleArticleComments () {
    const [comments, selectComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation()
    const { id } = location.state

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
        comments.map((comment) => {
            return (
                <div className="comment">
                    <h3 className="comment-header">{comment.author}:</h3>
                    <p className="comment-body">{comment.body}</p>
                    <p className="comment-details">votes: {comment.votes}</p>
                    <p className="comment-details">posted at: {String(comment.created_at).slice(0, 10)}</p>
                </div>
            )
        })
    )
}
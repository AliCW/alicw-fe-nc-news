import { useState, useEffect, useContext } from "react";
import { UserContext } from '../contexts/UserContext'
import { BeatLoader } from "react-spinners";
import * as api from '../api'
import AddComment from './AddComment'
import CommentCard from './CommentCard'

export default function SingleArticleComments (props) {
    const { username } = useContext(UserContext)
    const [comments, selectComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const id = props.article
    
    useEffect(() => {
        setIsLoading(true)
        api.fetchSingleArticleComments(id).then(({data}) => {
            if (typeof data === 'undefined'){
                setIsLoading(false)
            } else {

                selectComments(data.comments)
                setIsLoading(false)
            }          
        })
    }, [id]
    )

    if (isLoading) {
        return <BeatLoader className="page-loader" />
    }

    return (
        <div>
        <AddComment user={username} article={id} selectComments={selectComments}/>
        <section>
        {comments.length === 0 ? <p>no comments exist</p> 
        :
        comments.map((comment) => {
            return (
                <div key={comment.comment_id}>
                <CommentCard comment={comment} user={username} stateComments={comments} setComments={selectComments} />   
                </div>
                )
            })
        }
        </section>
        </div>
    )
}

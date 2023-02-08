import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import * as api from '../api'


export default function AddComment({ article, selectComments }) {
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

        api.postArticleComment({username: "jessjelly", body: newComment}, id).then((response) => {
            const date = new Date();
            const today = date.toString().slice(4, 15);
            
            function monthNumeric(today) {
                
                let dateArray = today.split(' ');
                if (dateArray[0] === 'Jan') {
                    dateArray.shift()
                    dateArray.unshift('01')
                }
                if (dateArray[0] === 'Feb') {
                    dateArray.shift()
                    dateArray.unshift('02')
                }
                if (dateArray[0] === 'Mar') {
                    dateArray.shift()
                    dateArray.unshift('03')
                }
                if (dateArray[0] === 'Apr') {
                    dateArray.shift()
                    dateArray.unshift('04')
                }
                if (dateArray[0] === 'May') {
                    dateArray.shift()
                    dateArray.unshift('05')
                }
                if (dateArray[0] === 'Jun') {
                    dateArray.shift()
                    dateArray.unshift('06')
                }
                if (dateArray[0] === 'Jul') {
                    dateArray.shift()
                    dateArray.unshift('07')
                }
                if (dateArray[0] === 'Aug') {
                    dateArray.shift()
                    dateArray.unshift('08')
                }
                if(dateArray[0] === 'Sep') {
                    dateArray.shift()
                    dateArray.unshift('09')
                }
                if(dateArray[0] === 'Oct') {
                    dateArray.shift()
                    dateArray.unshift('10')
                }
                if(dateArray[0] === 'Nov') {
                    dateArray.shift()
                    dateArray.unshift('11')
                }
                if(dateArray[0] === 'Dec') {
                    dateArray.shift()
                    dateArray.unshift('12')
                }
                let shiftArray = [dateArray[0], dateArray[1]] = [dateArray[1], dateArray[0]]
                shiftArray.push(dateArray[2])
                return shiftArray.reverse().join('-')
            }
            
            const newComment = {
                author: 'jessjelly',
                body: response.data.postedComment[0].body,
                votes: 0,
                created_at: monthNumeric(today),
                comment_id: response.data.postedComment[0].body,
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
        const timer = setTimeout(() => {
            setCommentSubmit(false);
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
    }
    if (commentSubmit)  return <p>Submitted!</p>
    if (isLoading) return <p>Posting...</p>

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



import { useState, useEffect } from "react";
import * as api from "../api"

export default function DeleteCommentCheck(props) {


    
    if(props.author === props.user.username) {
        console.log(props.setComments)
    
        function deleteClick(commentId) {
            api.deleteCommentByUsername(commentId).then(() => {
                props.setComments([])
                

                
            })
        }
        return (
            <button className="delete-button" onClick={() => deleteClick(props.commentId)}>Delete
            </button>
        )
    }

}
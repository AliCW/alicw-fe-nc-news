import { useState, useEffect } from "react";
import * as api from "../api"

export default function DeleteCommentCheck(props) {
    // console.log(props, '<<<')
    //console.log(props.user, 'user')

    

    
        function deleteClick(commentId) {
            api.deleteCommentByUsername(commentId).then(() => {
                
                

                
            })
        }
        return (
            <button className="delete-button" onClick={() => deleteClick(props.commentId)}>Delete
            </button>
        )
    

}
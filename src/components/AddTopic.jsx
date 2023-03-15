import { useState, useEffect, useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import * as api from "../api"

export default function AddTopic(){
    const { username } = useContext(UserContext)
    const [newTopicSlug, setNewTopicSlug] = useState('')
    const [newTopicDiscription, setNewTopicDiscription] = useState('')

    const handleSubmit = (event) => {

    }

    return (
        <div>
            <form className="add-topic-form" onSubmit={handleSubmit}>
                <label className="signup-labels">Topic Name:</label>
                <input className="input" placeholder="topic*"
                id="newTopic"
                value={newTopicSlug}
                onChange={(event) => setNewTopicSlug(event.target.value)}
                ></input>

            <label className="signup-labels">Description:</label>
            <textarea className="add-topic-discription-box" placeholder="description*"
                id="newTopic"
                value={newTopicDiscription}
                onChange={(event) => setNewTopicDiscription(event.target.value)}
                ></textarea>
            <button className="post-topic-button">Submit</button>
            </form>

        </div>
    )
}
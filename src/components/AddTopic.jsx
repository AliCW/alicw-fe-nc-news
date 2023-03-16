import { useState, useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import checkValidTopic from '../utilities/checkValidTopic'
import * as api from "../api"

export default function AddTopic({findTopics}){
    const { username } = useContext(UserContext)
    const [newTopicSlug, setNewTopicSlug] = useState('')
    const [newTopicDescription, setNewTopicDiscription] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [checkTopic, setCheckTopic] = useState(false)
    const [topicSubmit, setTopicSubmit] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)

        setCheckTopic(false)
        if (!checkValidTopic(newTopicSlug)) {
            setCheckTopic(true)
            return
        }
        const topicData = {
            slug: newTopicSlug,
            description: newTopicDescription,
            author: username,
        }
        api.addTopic(topicData).then((response) => {
             const addedTopic = {
                slug: response.data.body[0].slug,
                description: response.data.body[0].description,
             }
        setIsLoading(false)
        handleTopic(addedTopic)
        })
        .catch(() => {
            setIsError(true)
            setIsLoading(false) 
        })
    }

    const handleTopic = (addedTopic) => {
        setTopicSubmit(true)
        const timer = setTimeout(() => {
            setTopicSubmit(false);
            findTopics((currTopics) => {
                return [addedTopic, ...currTopics]
            })
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
    }

    if (topicSubmit)  return <p>Submitted!</p>
    if (isLoading) return <p>Posting...</p>
    if (isError) return <p>Error posting topic, please refresh try again</p>
    if (checkTopic) return <p>Error post topic name</p>

    return (
        <div>
            <form id="add-topic-form" className="add-topic-form" onSubmit={handleSubmit} autoComplete="on">
                <h3>Add A Topic:</h3>

                <label className="signup-labels">Topic Name:</label>

                {username === '' ?
                    <input className="input" placeholder="you must be signed in"

                    ></input>
                    :
                    <input className="input" placeholder="topic*"
                        id="newTopic"
                        value={newTopicSlug}
                        onChange={(event) => setNewTopicSlug(event.target.value)}
                    ></input>
                }

                <label className="signup-labels">Description:</label>

                {username === '' ?
                    <textarea className="add-topic-discription-box" placeholder="you must be signed in"

                    ></textarea>
                    :
                    <textarea className="add-topic-discription-box" placeholder="description*"
                        id="newTopic"
                        value={newTopicDescription}
                        onChange={(event) => setNewTopicDiscription(event.target.value)}
                    ></textarea>
                }

                { username === '' ?
                    <button className="post-topic-button-disabled" disabled>Submit</button>
                    :
                    <button className="post-topic-button">Submit</button>
                }
            </form>

        </div>
    )
}
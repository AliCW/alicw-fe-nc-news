import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import * as api from "../api"
import { capitaliseLinks } from "../utils";

export default function TopicNav() {
    const [topics, findTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        api.fetchTopics().then(({data}) => {
            findTopics(data.topics)
            setIsLoading(false)
        })
    }, []
    )

    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    return (
        <div className="topic-nav">
            <p className="topic-pane">↓Search By Topic↓</p>
            {topics.map((topic) => {
                return (
                    <div key={topic.slug}>
                        <Link to={"/topics/" + topic.slug}>{capitaliseLinks(topic.slug)}</Link>
                    </div>
                )
            })}

        </div>

    )
}

// state={selectedTopic(topic.slug)}
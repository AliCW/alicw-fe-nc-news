import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import * as api from "../api"

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
        <div>
            {topics.map((topic) => {
                return (
                    <div className="topic-nav">
                        <Link to={"/topics/" + topic.slug}>{topic.slug}</Link>
                    </div>
                )
            })}

        </div>

    )
}

// state={selectedTopic(topic.slug)}
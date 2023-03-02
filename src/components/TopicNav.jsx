import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import * as api from "../api"
import { capitaliseFirstLetter } from "../utilities/capitaliseFirstLetter";

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
            {topics.map((topic) => {
                return (
                    <div key={topic.slug} className="topic-nav-links">
                        <Link to={"/topics/" + topic.slug}>{capitaliseFirstLetter(topic.slug)}</Link>
                    </div>
                )
            })}
        </div>
    )
}

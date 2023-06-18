import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { BeatLoader } from "react-spinners";
import * as api from "../api"
import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter";

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
        return <BeatLoader className="page-loader" />
    }

    return (
        <div >
            {topics.map((topic) => {
                return (
                    <div key={topic.slug} className="topic-bar">
                        <Link to={"/topics/" + topic.slug} className="topic-button">{capitaliseFirstLetter(topic.slug)}</Link>
                    </div>
                )
            })}
        </div>
    )
}

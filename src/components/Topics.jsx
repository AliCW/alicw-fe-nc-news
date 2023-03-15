import { useState, useEffect } from "react";
import TopicCard from './TopicCard'
import AddTopic from './AddTopic'
import * as api from "../api"

export default function Topics() {
    const [topics, findTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        <div className="articles">
            <AddTopic findTopics={findTopics}/>
            {topics.map((topic) => {
                return (
                    <div key={topic.slug}>
                        <TopicCard topic={topic}/>
                    </div>
                )
            })}
        </div>
    );
};

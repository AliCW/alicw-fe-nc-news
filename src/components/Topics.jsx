import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
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
        return <BeatLoader className="page-loader" />
    }

    return (
        <div>
            <h2 className="sub-header">Topics</h2>
            {topics.map((topic) => {
                return (
                    <div key={topic.slug}>
                        <TopicCard topic={topic}/>
                    </div>
                )
            })}
            <AddTopic findTopics={findTopics}/>
        </div>
    );
};

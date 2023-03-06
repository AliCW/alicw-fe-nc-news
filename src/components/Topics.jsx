import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import * as api from "../api"
import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter";

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
        topics.map((topic) => {
            return (
      <div key={topic.slug} className="topics">
        <Link to={"/topics/" + topic.slug} state={{slug: topic.slug}} className="topic-title">{capitaliseFirstLetter(topic.slug)}</Link>
        <p className="topic-description">{topic.description}</p>
        
    </div>
            )
        })
    );
  };

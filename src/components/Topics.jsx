import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
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

    function capitaliseLinks(topic) {
        const splitString = topic.split('')
        const firstLetter = splitString[0].toUpperCase()
        splitString.shift()
        splitString.unshift(firstLetter)
        return splitString.join('')
    }

    if (isLoading) {
        return <p className="loading">Loading...</p>
    }

    return (
        topics.map((topic) => {
            return (
      <div key={topic.slug} className="topics">
        <Link to={"/topic/" + topic.slug} state={topic.slug} className="topic-title">{capitaliseLinks(topic.slug)}</Link>
        <p className="topic-description">{topic.description}</p>
        
    </div>
            )
        })
    );
  };







  //use state to send over the topic id
  //retrieve the data in a single element using the dynamic id
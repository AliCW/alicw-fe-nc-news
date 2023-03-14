import { useState, useEffect, useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import TopicCard from './TopicCard'
import * as api from "../api"


export default function Topics() {
    const { username } = useContext(UserContext)
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
        <div>
            {/* {username === '' && <p>here</p>} */}
            <TopicCard topics={topics} />
        </div>
    );
};

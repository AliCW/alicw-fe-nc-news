import { useState, useEffect, useContext } from "react";
import { BeatLoader } from "react-spinners";
import TopicCard from './TopicCard'
import AddTopic from './AddTopic'
import * as api from "../api"
import { SignInContext } from "../contexts/SignInContext";

export default function Topics() {
    const [topics, findTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setOpenSignIn } = useContext(SignInContext)

    useEffect(() => {
        setIsLoading(true)
        api.fetchTopics().then(({data}) => {
            findTopics(data.topics)
            setIsLoading(false)
        })
    }, []
    )

    const disableDropdown = () => {
        setOpenSignIn(false)
    }
  

    if (isLoading) {
        return (
            <div>
                <BeatLoader className="page-loader" />
                <p className="page-loader">
                    Data is served from a free instance that spins down with inactivity,
                    initial requests can be delayed by 50 seconds or more.
                </p>
            </div>
        )
    }

    return (
        <div onClick={disableDropdown} className="disable-dropdown">
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

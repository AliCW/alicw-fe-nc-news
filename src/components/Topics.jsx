import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function Topics() {
    const [topic, findTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        api.findTopics().then(({data}) => {
            findTopics(data)
            setIsLoading(false)
            
        })
    })




    return (
      <div className="topics">
        <Link to="/topics/coding">{topic[0]}</Link>
    </div>
    );
  };







  //use state to send over the topic id
  //retrieve the data in a single element using the dynamic id
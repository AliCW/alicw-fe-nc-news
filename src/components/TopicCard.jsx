import { Link } from "react-router-dom"
import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter";

export default function TopicCard( { topic } ) {
    return (
        <div key={topic.slug} >
            <Link to={"/topics/" + topic.slug} state={{ slug: topic.slug }} >{capitaliseFirstLetter(topic.slug)}</Link>
            <p >{topic.description}</p>
        </div>
    )
}

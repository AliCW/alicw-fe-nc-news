import { Link } from "react-router-dom"
import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter";

export default function TopicCard( { topic } ) {
    return (
        <div key={topic.slug} className="map-div">
            <Link to={"/topics/" + topic.slug} state={{ slug: topic.slug }} className="map-title">{capitaliseFirstLetter(topic.slug)}</Link>
            <p className="map-disc">{topic.description}</p>
        </div>
    )
}

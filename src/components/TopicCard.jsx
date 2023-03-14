import { Link } from "react-router-dom"
import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter";

export default function TopicCard({topics}) {
    return (
        <div>
            {topics.map((topic) => {
                return (
                    <div key={topic.slug} className="topics">
                        <Link to={"/topics/" + topic.slug} state={{ slug: topic.slug }} className="topic-title">{capitaliseFirstLetter(topic.slug)}</Link>
                        <p className="topic-description">{topic.description}</p>
                    </div>
                )
            })}
        </div>
    )

}

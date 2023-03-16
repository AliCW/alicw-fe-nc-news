import { useState, useContext } from "react";
import { UserContext } from '../contexts/UserContext';


const handleSubmit = () => {

}

export default function AddArticle() {
    const { username } = useContext(UserContext)
    const [articleTitle, setArticleTitle] = useState('')
    const [articleTopic, setArticleTopic] = useState('')
    const [articleBody, setArticleBody] = useState('')






    return (
        <div>
            <form id="signup-form" className="login" onSubmit={handleSubmit} autoComplete="on">
                <label className="signup-labels">Title</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Title"
                    onChange={(event) => { setArticleTitle(event.target.value) }}
                />
                <label className="signup-labels">Topic</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Topic"
                    onChange={(event) => { setArticleTopic(event.target.value) }}
                />
                <label className="signup-labels">Body</label>
                <textarea className="add-article-box" placeholder="Go for it..."
                    id="articleBody"
                    value={articleBody}
                    onChange={(event) => setArticleBody(event.target.value)}
                ></textarea>
            </form>

        </div>
    )
}
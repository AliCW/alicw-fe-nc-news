import { useState, useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import * as api from "../api";

export default function AddArticle({selectArticles}) {
    const { username } = useContext(UserContext)
    const [postedArticle, setPostedArticle] = useState('')
    const [articleTitle, setArticleTitle] = useState('')
    const [articleTopic, setArticleTopic] = useState('')
    const [articleBody, setArticleBody] = useState('')
    const [articleSubmit, setArticleSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const articleData = {
            title: articleTitle,
            topic: articleTopic,
            author: username,
            body: articleBody,
        }

        api.addArticle(articleData).then((response) => {

            

            console.log(response, "here")
            setIsLoading(false)
            handleArticle(articleData)
        })
            .catch(() => {
                setIsError(true)
                setIsLoading(false)
            })
    }

    const handleArticle = (articleData) => {
        setPostedArticle(true)
        const timer = setTimeout(() => {
            setArticleSubmit(false)
            selectArticles((currArticles) => {
                return [articleData, ...currArticles]
            })
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
    }

    if (articleSubmit) return <p>Submitting...</p>   
    if (isLoading) return <p>Posting...</p>
    if (isError) return <p>Error posting article, please refresh try again</p>

    return (
        <div>
            <form id="signup-form" className="login" onSubmit={handleSubmit} autoComplete="on">
                <h3>Add article:</h3>
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
                <button className="signup-button" type="submit">Submit</button>
            </form>

        </div>
    )
}
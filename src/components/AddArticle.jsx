import { useState, useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import { SignInContext } from "../contexts/SignInContext"
import { BeatLoader } from "react-spinners";
import { FiXCircle, FiCheckCircle } from "react-icons/fi"
import dateFormat from '../utilities/dateFormat';
import * as api from "../api";

export default function AddArticle({selectArticles}) {
    const { username } = useContext(UserContext)
    const { setOpenSignIn } = useContext(SignInContext);
    const [articleTitle, setArticleTitle] = useState('')
    const [articleTopic, setArticleTopic] = useState('')
    const [articleBody, setArticleBody] = useState('')
    const [articleSubmit, setArticleSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const articleData = {
            title: articleTitle,
            topic: articleTopic,
            "username": username,
            body: articleBody,
        }

        api.addArticle(articleData).then((response) => {
            const date = new Date();
            const today = date.toString().slice(4, 15);

            const newArticle = {
                article_id: response.data.article[0].article_id,
                author: username,
                body: articleBody,
                comment_count: response.data.article[0].comment_count,
                created_at: dateFormat(today),
                title: articleTitle,
                topic: articleTopic,
                votes: response.data.article[0].votes,
            }

            setIsLoading(false)
            handleArticle(newArticle)
        })
            .catch(() => {
                setIsError(true)
                setIsLoading(false)
            })
    }

    const handleArticle = () => {
        setArticleSubmit(true)
        setIsSuccess(true)
        const timer = setTimeout(() => {
            setArticleSubmit(false)

        }, 2000);
        return () => {
          clearTimeout(timer);
        };
    }

    const disableDropdown = () => {
        setOpenSignIn(false);
    };

    if (articleSubmit) return <BeatLoader className="page-loader" />  
    if (isLoading) return <BeatLoader className="page-loader" />
    if (isError) return <p className="signup-failure">Error posting article, please refresh try again <FiXCircle/></p>
    if (isSuccess) return <p className="signup-success">Article posted successfully <FiCheckCircle/></p>

    return (
        <div onClick={disableDropdown} className="disable-dropdown">
            <form id="signup-form" onSubmit={handleSubmit} autoComplete="off" className="user-form">
                <h3 className="user-form-header">Add article:</h3>
                <label className="user-label">Title:</label>
                <input
                    className="user-input-long"
                    type="text"
                    placeholder="Title"
                    onChange={(event) => { setArticleTitle(event.target.value) }}
                />
                <label className="user-label">Topic:</label>
                <input
                    className="user-input-long"
                    type="text"
                    placeholder="Topic"
                    onChange={(event) => { setArticleTopic(event.target.value) }}
                />
                <label className="user-label">Body:</label>
                <textarea  placeholder="Go for it..."
                    rows="25"
                    className="user-text-area"
                    id="articleBody"
                    value={articleBody}
                    onChange={(event) => setArticleBody(event.target.value)}
                ></textarea>
                <button className="submit-button" type="submit">Submit</button>
            </form>

        </div>
    )
}
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import { BeatLoader } from "react-spinners";
import { FiXCircle, FiCheckCircle } from "react-icons/fi"
import * as api from '../api'

export default function Login() {
    const { username } = useContext(UserContext)
    const [usernameInput, setUsernameInput] = useState('')
    const [password, setPassword] = useState('')
    const [signinSuccess, setSigninSuccess] = useState(false)
    const [signinError, setSigninError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const { setUsername } = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const userData = {
            "username": usernameInput,
            "password": password,
        }
        document.getElementById("user-form").reset()
        
        api.userLogin(userData).then((data) => {
            if(data.status === 200) {
                setIsLoading(false)
                setSigninSuccess(true)
                setUsername(usernameInput)
            } else {
                setIsLoading(false)
                setSigninError(true)
            }
        })
    }

    if (isLoading) return <BeatLoader className="page-loader" />

    return (
        <div>
            <form id="user-form" onSubmit={handleSubmit} autoComplete="on" className="user-form">
                <label className="user-label">Username</label>
                <input
                    className="user-input"
                    type="text"
                    placeholder="Username"
                    onChange={(event) => {setUsernameInput(event.target.value)}}
                />
                <br></br>
                <label className="user-label">Password</label>
                <input 
                    className="user-input"
                    autoComplete='off'
                    type="password"
                    placeholder="Password"
                    onChange={(event) => {setPassword(event.target.value)}}
                />
                {signinError === true && <p className="signup-failure">Login Failure <FiXCircle/> Incorrect username or password</p>}
                {signinSuccess === true && <p className="signup-success">Login Successfull <FiCheckCircle/> Welcome {username}!</p>}
                <br></br>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}
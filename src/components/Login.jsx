import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
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
        document.getElementById("login-form").reset()
        
        api.userLogin(userData).then((data) => {
            if(data.response.status === 401) {
                setIsLoading(false)
                setSigninError(true)
            } else {
                setIsLoading(false)
                setSigninSuccess(true)
                setUsername(usernameInput)
            }
        })
    }

    if (isLoading) return <p className="loading">Loading...</p>

    return (
        <div>
            <form id="login-form" className="login" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    onChange={(event) => {setUsernameInput(event.target.value)}}
                />
                <label>Password</label>
                <input 
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={(event) => {setPassword(event.target.value)}}
                />
                {signinError === true && <p>Incorrect username or password</p>}
                {signinSuccess === true && <p>Login Successfull, welcome {username}!</p>}
                <button className="signup-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
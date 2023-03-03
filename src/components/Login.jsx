import { useState } from 'react';
import * as api from '../api'

export default function Login(currentUser, setCurrentUser) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signinSuccess, setSigninSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const userData = {
            "username": username,
            "password": password,
        }
        document.getElementById("login-form").reset()
        
        api.userLogin(userData).then((data) => {
            console.log(data, '<<<< data here ')
            console.log(currentUser)
            setIsLoading(false)
            setSigninSuccess(true)
            setCurrentUser(username)

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
                    onChange={(event) => {setUsername(event.target.value)}}
                />
                <label>Password</label>
                <input 
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={(event) => {setPassword(event.target.value)}}
                />
                {signinSuccess === true && <p>Login Successfull, welcome{currentUser}</p>}
                <button className="signup-button" type="submit">Submit</button>
            </form>
        </div>
    )
}
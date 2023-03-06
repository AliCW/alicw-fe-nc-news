import { useState } from 'react';
import checkValidPassword from '../utilities/checkValidPassword'
import checkValidUsername from '../utilities/checkValidUsername';
import checkValidName from '../utilities/checkValidName';
import * as api from '../api'

export default function Signup() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [signupComplete, setSignupComplete] = useState(false);
  const [signupError, setSignupError] = useState(false)
  const [passwordSync, checkPasswordSync] = useState(false); //Sync - passwords match
  const [passwordSyntax, checkPasswordSyntax] = useState(false) //Syntax - passwords meets requirements
  const [usernameSyntax, checkUsernameSyntax] = useState(false) 
  const [duplicateUsername, checkDuplicateUsername] = useState(false)
  const [nameSyntax, checkNameSyntax] = useState(false) 

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    checkPasswordSync(false)
    checkPasswordSyntax(false)
    checkUsernameSyntax(false)
    checkNameSyntax(false)
    
    document.getElementById("signup-form").reset();
    if(password !== checkPassword) {
      checkPasswordSync(true)
      return
    }
    if(!checkValidPassword(password)) {
      checkPasswordSyntax(true)
      return
    } 
    if(!checkValidUsername(username)) {
      checkUsernameSyntax(true)
      return 
    }
    if(!checkValidName(name)) {
      checkNameSyntax(true)
      return 
    }

    const defaultImage = "https://e7.pngegg.com/pngimages/369/132/png-clipart-man-in-black-suit-jacket-chris-hansen-to-catch-a-predator-television-show-nbc-news-chris-benoit-miscellaneous-television.png"
    const userData = {
      "username": username,
      "name": name,
      "password": password,
      "avatar_url": avatarURL,
    }

    if(avatarURL === '') {
      userData.avatar_url = defaultImage
    }
      
        api.userSignUp(userData).then((data) => {
          if(data.message === "Network Error") {
            setIsLoading(false)
            setSignupError(true)
          }
          if (data.response.status === 409) {
            setIsLoading(false)
            checkDuplicateUsername(true)
            setSignupComplete(false)
            return
          }
             else {
            setIsLoading(false)
            setSignupComplete(true)
          }
        })
  }

  if (isLoading) return <p className="loading">Loading...</p>
  if (signupError) return <p className="error">Error signing up, please refresh & try again</p>

  return (
      <div>
      <form id="signup-form" className="login" onSubmit={handleSubmit}>
        <label className="signup-labels">Username*</label>
        <input
          className="input"
          type="text"
          placeholder="Username*"
          onChange={(event) => {setUsername(event.target.value)}}
        />
        <label className="signup-labels">Name*</label>
        <input
          className="input"
          type="text"
          placeholder="Name*"
          onChange={(event) => {setName(event.target.value)}}
        />
        <label className="signup-labels">Password*</label>
        <input
          className="input"
          type="password"
          placeholder="Password*"
          onChange={(event) => {setPassword(event.target.value)}}
        />
        <label className="signup-labels">Confirm Password*</label>
        <input
          className='input'
          type="password"
          placeholder="Confirm Password*"
          onChange={(event) => {setCheckPassword(event.target.value)}}
          />
        <label className="signup-labels">Avatar URL:</label>
        <input
        className='input'
          type="url"
          placeholder="Avatar URL (optional)"
          onChange={(event) => {setAvatarURL(event.target.value)}}
          defaultValue=" "
          />
          {signupComplete === true && <h3>Sign Up Completed</h3>}
          {checkPassword !== password && <p className='password-prompt'>passwords do not match</p>}
          {passwordSync === true && <p className='password-prompt'>the passwords do not match, you were warned</p>}
          {usernameSyntax === true && <p className='password-prompt'>username needs to be between 5 & 20 characters in length</p>}
          {duplicateUsername === true && <p className='password-prompt'>username is already taken! please use another</p>}
          {passwordSyntax === true && <p className='password-prompt'>Passwords must adhere to the following</p>}
          {passwordSyntax === true &&
            <ul>
              <li>Between 8 & 40 characters long</li>  
              <li>Contain one upper case character</li>
              <li>Contain one lower case character</li>
              <li>Contain one number</li>
              <li>Contain one of the following symbols:</li>
              <li>! £ | - + , = * . ? # ; _ $ % ^</li>
            </ul>
          }
          {nameSyntax === true && <p className='password-prompt'>Your name can only contain 4-50 letters</p>}
        <button className="signup-button" type="submit">Submit</button>
      </form>
    </div>
  );
};
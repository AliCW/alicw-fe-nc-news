import { useState, useEffect } from 'react';
import * as api from '../api'
import { checkValidPassword } from '../utilities/checkValidPassword'
import { checkValidUsername } from '../utilities/checkValidUsername';
import { checkValidName } from '../utilities/checkValidName';
import { checkValidLink } from '../utilities/checkValidLink';
import SignupSuccessfull from './SignupAttempt'


export default function Signup(user, setUser) {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  // const [isLoading, setIsLoading] = useState(true)
  const [successfullSignup, setSuccessfullSignup] = useState(false)

  const [passwordSync, checkPasswordSync] = useState(false); //sets error for incorrect username - mismatch
  const [passwordSyntax, checkPasswordSyntax] = useState(false) //sets error for incorrect password syntax
  const [usernameSyntax, checkUsernameSyntax] = useState(false) //sets error for incorrect username
  const [nameSyntax, checkNameSyntax] = useState(false) //sets error for incorrect name
  const [avatarURLSyntax, checkAvatarURLSyntax] = useState(false)
    // console.log(user, setUser)


  const handleSubmit = (event) => {
    event.preventDefault();
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
    if(avatarURL === true) {
      if(!checkValidLink(avatarURL)) {
        checkAvatarURLSyntax(true)
        return
      }
    }
    console.log('here')
    setSuccessfullSignup(true)
    
  }
  

    if (successfullSignup) {
      return (
      <div>
      <SignupSuccessfull username={username} name={name} passsword={password} avatar_url={avatarURL}></SignupSuccessfull>
      
      </div>
      )
  }

  return (
      <div>
      <form id="signup-form" className="login" onSubmit={handleSubmit}>
        <label>Username*</label>
        <input
          type="text"
          placeholder="Username*"
          onChange={(event) => {setUsername(event.target.value)}}
        />
        <label>Name*</label>
        <input
          type="text"
          placeholder="Name*"
          onChange={(event) => {setName(event.target.value)}}
        />
        <label>Password*</label>
        <input
          type="password"
          placeholder="Password*"
          onChange={(event) => {setPassword(event.target.value)}}
        />
        <label>Confirm Password*</label>
        <input
          type="password"
          placeholder="Confirm Password*"
          onChange={(event) => {setCheckPassword(event.target.value)}}
          />
        <label>Avatar URL:</label>
        <input
          type="url"
          placeholder="Avatar URL (optional)"
          onChange={(event) => {setAvatarURL(event.target.value)}}
          defaultValue=""
          />
          {checkPassword !== password && <p className='password-prompt'>passwords do not match</p>}
          {passwordSync === true && <p className='password-prompt'>the passwords do not match, you were warned</p>}
          {usernameSyntax === true && <p className='password-prompt'>username needs to be between 5 & 20 characters in length</p>}
          {passwordSyntax === true && <p className='password-prompt'>passwords needs to contain things to be added here later</p>}
          {nameSyntax === true && <p className='password-prompt'>Your name can only contain 4-50 letters</p>}
          {avatarURLSyntax === true && <p className='password-prompt'>Invalid avatarURL</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



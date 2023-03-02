import { useState } from 'react';
import { checkValidPassword } from '../utilities/checkValidPassword'
import { checkValidUsername } from '../utilities/checkValidUsername';
import { checkValidName } from '../utilities/checkValidName';
import { checkValidLink } from '../utilities/checkValidLink';
import SignupAttempt from './SignupAttempt'

export default function Signup() {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  
  const [signupFail, setSignupFail] = useState(false);
  const [passwordSync, checkPasswordSync] = useState(false); //Sync - passwords match
  const [passwordSyntax, checkPasswordSyntax] = useState(false) //Syntax - passwords meets requirements
  const [usernameSyntax, checkUsernameSyntax] = useState(false) 
  const [nameSyntax, checkNameSyntax] = useState(false) 
  const [avatarURLSyntax, checkAvatarURLSyntax] = useState(false)

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
    handleSignup(username, name, password, avatarURL).then(() => {
      console.log("not gonna work")
    }).catch(() => {
              return (
          <p>Error signing up - please refresh & try again</p>
        )
    })
  }

  const handleSignup = (username, name, password, avatarURL) => {
    console.log('right here')
    setSignupFail(true)
      return (
        
        <div>
          <p>Error</p>
          <SignupAttempt to="/signup/attempt" username={username} name={name} password={password} avatar_url={avatarURL}></SignupAttempt>
          
        </div>
      )
      
      }    
      // .then(() => {

      // })
      
      // .catch(() => {
      //   return (
      //     <p>Error signing up - please refresh & try again</p>
      //   )
      // })

  


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
          {avatarURLSyntax === true && <p className='password-prompt'>Invalid avatarURL</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



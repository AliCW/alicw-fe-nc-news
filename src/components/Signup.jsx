import { useState } from 'react';
import { BeatLoader } from "react-spinners";
import { FiXCircle, FiCheckCircle } from "react-icons/fi"
import checkValidPassword from '../utilities/checkValidPassword'
import checkValidUsername from '../utilities/checkValidUsername';
import checkValidName from '../utilities/checkValidName';
import * as api from '../api'

export default function Signup() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [signupComplete, setSignupComplete] = useState(false);
  const [signupError, setSignupError] = useState(false)
  const [passwordSync, checkPasswordSync] = useState(false);
  const [passwordSyntax, checkPasswordSyntax] = useState(false) 
  const [usernameSyntax, checkUsernameSyntax] = useState(false) 
  const [duplicateDetails, checkDuplicateDetails] = useState(false)
  const [nameSyntax, checkNameSyntax] = useState(false) 

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    checkPasswordSync(false)
    checkPasswordSyntax(false)
    checkUsernameSyntax(false)
    checkNameSyntax(false)
    
    document.getElementById("user-form").reset();
    if(password !== checkPassword) {
      checkPasswordSync(true)
      setIsLoading(false)
      return
    }
    if(!checkValidPassword(password)) {
      checkPasswordSyntax(true)
      setIsLoading(false)
      return
    } 
    if(!checkValidUsername(username)) {
      checkUsernameSyntax(true)
      setIsLoading(false)
      return 
    }
    if(!checkValidName(name)) {
      checkNameSyntax(true)
      setIsLoading(false)
      return 
    }
    
    const defaultImage = "https://e7.pngegg.com/pngimages/369/132/png-clipart-man-in-black-suit-jacket-chris-hansen-to-catch-a-predator-television-show-nbc-news-chris-benoit-miscellaneous-television.png"
    const userData = {
      "username": username,
      "name": name,
      "password": password,
      "email": emailAddress,
      "avatar_url": avatarURL,
    }

    if(avatarURL === '') {
      userData.avatar_url = defaultImage
    }
      api.userSignUp(userData).then((data) => {
        if (data.message === "Network Error") {
          setIsLoading(false)
          setSignupError(true)
        }

        if (data.status === 409) {
          setIsLoading(false)
          setSignupComplete(false)
          checkDuplicateDetails(true)
          return
        }
        else {
          setIsLoading(false)
          setSignupComplete(true)
        }
      })
  }
  

  if (isLoading) return <BeatLoader className="page-loader" />
  if (signupError) return <p className="page-loader">Error signing up, please refresh & try again <FiXCircle/></p>

  return (
      <div>
      <form id="user-form" onSubmit={handleSubmit} autoComplete="off" className="user-form">
        <label className="user-label">Username*</label>
        <input
          autoComplete="off"
          className="user-input"
          type="text"
          placeholder="Username*"
          onChange={(event) => {setUsername(event.target.value)}}
        />
        <br></br>
        <label className="user-label">Name*</label>
        <input
          autoComplete="off"
          className="user-input"
          type="text"
          placeholder="Name*"
          onChange={(event) => {setName(event.target.value)}}
        />
        <br></br>
        <label className="user-label">Password*</label>
        <input
          autoComplete="off"
          className="user-input"
          type="password"
          placeholder="Password*"
          onChange={(event) => {setPassword(event.target.value)}}
        />
        <br></br>
        <label className="user-label">Confirm Password*</label>
        <input
          autoComplete="off"
          className="user-input"
          type="password"
          placeholder="Confirm Password*"
          onChange={(event) => {setCheckPassword(event.target.value)}}
          />
          <br></br>
        <label className="user-label">Email*</label>
        <input 
          autoComplete="off"
          className="user-input"
          type="email"
          placeholder="Email Address*"
          onChange={(event) => {setEmailAddress(event.target.value)}}
        />
        <br></br>
        <label className="user-label">Avatar URL:</label>
        <input
          className="user-input-long"
          type="url"
          placeholder="Avatar URL (optional)"
          onChange={(event) => {setAvatarURL(event.target.value)}}
          defaultValue=" "
          />
          {signupComplete === true && <h3 className="signup-success">Sign Up Completed <FiCheckCircle/></h3>}
          {checkPassword !== password && <p className="signup-failure"> passwords do not match <FiXCircle/> </p> }
          {passwordSync === true && <p className="signup-failure">the passwords do not match, you were warned <FiXCircle/></p>}
          {usernameSyntax === true && <p className="signup-failure">username needs to be between 5 & 20 characters in length <FiXCircle/></p>}
          {duplicateDetails === true && <p className="signup-failure">username / email is already taken! please use another <FiXCircle/></p>}
          {passwordSyntax === true && <p className="signup-failure"><FiXCircle/> Passwords must adhere to the following:</p>}
          {passwordSyntax === true &&
            <ul className="pass-fail-list">
              <li>Between 8 & 40 characters long</li>
              <br></br>  
              <li>Contain one upper case character</li>
              <br></br>  
              <li>Contain one lower case character</li>
              <br></br>  
              <li>Contain one number</li>
              <br></br>  
              <li>Contain one of the following symbols:</li>
              <li>! £ | - + , = * . ? # ; _ $ % ^</li>
            </ul>
          }
          {nameSyntax === true && <p className="signup-failure">Your name can only contain 4-50 letters <FiXCircle/></p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};
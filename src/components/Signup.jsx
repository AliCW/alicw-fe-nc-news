import { useState, useEffect } from 'react';
import { checkValidPassword } from '../utilities/checkValidPassword'


export default function Signup(user, setUser) {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [passwordSync, checkPasswordSync] = useState(false);
  const [passwordSyntax, checkPasswordSyntax] = useState(false)
  const [nameSyntax, checkNameSyntax] = useState(false)
    // console.log(user, setUser)


  const handleSubmit = (event) => {
    checkPasswordSync(false)
    checkPasswordSyntax(false)
    checkNameSyntax(false)
    event.preventDefault();
    document.getElementById("signup-form").reset();
    if(password !== checkPassword) {
      checkPasswordSync(true)
      return handleBadSubmission()
    }

    if(!checkValidPassword(password)) {
      checkPasswordSyntax(true)
      return handleBadSubmission()
    } 

    if(!username.length < 5 || !username.length > 20) {
      checkNameSyntax(true)
      return handleBadSubmission()
    }


    
    //console.log(username, name, password, checkPassword)
        

    }


    const handleBadSubmission = () => {
      document.getElementById("signup-form").reset();
    }

  return (
      <div>
      <form id="signup-form" className="login" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {setUsername(event.target.value)}}
        />
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {setName(event.target.value)}}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {setPassword(event.target.value)}}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {setCheckPassword(event.target.value)}}
          />
          {checkPassword !== password && <p className='password-prompt'>passwords do not match</p>}
          {passwordSync === true && <p className='password-prompt'>the passwords do not match, you were warned</p>}
          {nameSyntax === true && <p className='password-prompt'>username needs to be between 5 & 20 characters in length</p>}
          {passwordSyntax === true && <p className='password-prompt'>passwords needs to contain things to be added here later</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



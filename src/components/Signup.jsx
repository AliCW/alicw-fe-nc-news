import { useState, useEffect } from 'react';


export default function Signup(user, setUser) {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [passwordSync, checkPasswordSync] = useState(false);
    // console.log(user, setUser)


  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("signup-form").reset();
    if(password !== checkPassword) {
      checkPasswordSync(true)
    }
    console.log(username, name, password, checkPassword)

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


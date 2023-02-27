import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react';


export default function Signup(user, setUser) {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [checkPassSym, setCheckPassSym] = useState(false);

    //console.log(user, setUser)

    const misMatch = () => {
      return <p>The passwords provided do not match</p>
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== checkPassword) {
        setCheckPassSym(true)
      }

      console.log(username, name, password, checkPassword)

    }




  return (
    <div className="login">
      
      <form className="login" onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

    const [username , setUsername ] = useState("");
    const [password , setPassword] = useState("");
    const [newUserName , setNewUserName] = useState("");

    const submitForm = (event)=>{
        event.preventDefault();
        console.log(username);
        console.log(password);
        console.log(newUserName);
        const body = {
          userName : newUserName,
          password : password
        }
        const URL = `${url}user/${username}` ;
        axios.post(URL,body)
        .then((result) => {
          if (result.data.error === 'User already registered') {
            alert('User already registered');
            navigate('/login'); // Redirect to the login page
          } else {
            alert('Registration complete');
            navigate('/todo', { state: { user: result.data?.user, task: result.data?.task } });
          }
        }).catch((err) => {
            console.log(err.status);
            if(err)
            navigate('/login');
        });
      }

  return (
    <div>
      Register

      <div className='container-fluid'>
        <div className='row'>
        <form onSubmit={submitForm}>
       <div> <label for="userid">Userid : </label>
      <input type='text' name='userid'  onChange={(event) => setUsername(event.target.value)}/></div> <br/>
     <div> <label for="username">Username : </label>
    <input type='text' name='username' onChange={(event) => setNewUserName(event.target.value)}/></div><br/>
    <div><label for="password">Password : </label>
      <input type='password' name='password' onChange={(event) => setPassword(event.target.value)}/></div><br/>

      <button type='submit'>Submit</button>
    </form>
        </div>
</div>
    </div>
  )
}


export default Register

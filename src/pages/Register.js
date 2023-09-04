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
        const URL = "http://localhost:5000/user/"+username ;
        axios.post(URL,body)
        .then((result) => {
            // console.log(result.data);
          //   if (result.data.user?.userid != username) {
          //     alert("User not found");
          //     navigate('/error');
          // } else if (result.data.user?.password !== password ) {
          //     alert("Incorrect password");
          //     navigate('/error');
          // } else {
          //   console.log(result.data?.user.userName);
          if (result.data.error === 'User already registered') {
            alert('User already registered');
            navigate('/login'); // Redirect to the login page
          } else {
            alert('Registration complete');
            navigate('/todo', { state: { user: result.data?.user, task: result.data?.task } });
            // navigate('/login'); 
          }
              // alert("Registration complete");
              // navigate('/todo', {state : { user : result.data?.user , task : result.data?.task}});
          // }
        }).catch((err) => {
            console.log(err.status);
            if(err)
            navigate('/login');
        });
      }

  return (
    <div>
      Register

      <form onSubmit={submitForm}>
    <input type='text'  onChange={(event) => setUsername(event.target.value)}/>
    <input type='text' onChange={(event) => setNewUserName(event.target.value)}/>
      <input type='password' onChange={(event) => setPassword(event.target.value)}/>

      <button type='submit'>Submit</button>
    </form>

    </div>
  )
}


export default Register

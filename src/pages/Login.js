import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

    const [username , setUsername ] = useState("");
    const [password , setPassword] = useState("");

    const submitForm = (event)=>{
        event.preventDefault();
        console.log(username);
        console.log(password);
        const URL = "http://localhost:5000/user/"+username ;
        axios.get(URL)
        .then((result) => {
            console.log(result.data);
            if (result.data.user?.userid != username) {
              alert("User not found");
              navigate('/error');
          } else if (result.data.user?.password !== password ) {
              alert("Incorrect password");
              navigate('/error');
          } else {
            console.log(result.data?.user.userName);
              alert("User found");
              navigate('/todo', {state : { user : result.data?.user , task : result.data?.task}});
          }
        }).catch((err) => {
            console.log(err);
            navigate('/error');
        });
      }

  return (
    <div>
      Login


      <form onSubmit={submitForm}>
    <input type='text'  onChange={(event) => setUsername(event.target.value)}/>
      <input type='password' onChange={(event) => setPassword(event.target.value)}/>

      <button type='submit'>Submit</button>
    </form>

    </div>
  )
}
export default Login

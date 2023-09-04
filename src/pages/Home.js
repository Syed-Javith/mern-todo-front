import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();

    // const [username , setUsername ] = useState("");
    // const [password , setPassword] = useState("");

    // const submitForm = (event)=>{
    //     event.preventDefault();
    //     console.log(username);
    //     console.log(password);
    //     const URL = "http://localhost:5000/user/"+username ;
    //     axios.get(URL)
    //     .then((result) => {
    //         console.log(result.data);
    //         if (result.data.user?.userid != username) {
    //           alert("User not found");
    //           navigate('/error');
    //       } else if (result.data.user?.password !== password ) {
    //           alert("Incorrect password");
    //           navigate('/error');
    //       } else {
    //         console.log(result.data?.user.userName);
    //           alert("User found");
    //           navigate('/todo', {state : { user : result.data?.user , task : result.data?.task}});
    //       }
    //     }).catch((err) => {
    //         console.log(err);
    //         navigate('/error');
    //     });

    // }
  return (
    <div>
      <h1>Welcome Home</h1>

    {/* <form onSubmit={submitForm}>
    <input type='text'  onChange={(event) => setUsername(event.target.value)}/>
      <input type='password' onChange={(event) => setPassword(event.target.value)}/>

      <button type='submit'>Submit</button>
    </form> */}
    <Link to="/login" >Login</Link>
    <Link to="/register" >Register</Link>  
    </div>
  )
}


export default Home

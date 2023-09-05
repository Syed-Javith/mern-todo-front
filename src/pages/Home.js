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
    <div className='home-div'>
      <h1 className="center">Welcome Home</h1>

    <div>
    <p className="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim neque eius accusamus dolorum quisquamrepudiandae beatae illum, obcaecati corporis tenetur sit! Voluptatem autem hic non.Optio eu reprehenderit minima blanditiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim neque eius accusamus  dolorum quisquam repudiandae beatae illum, obcaecati corporis tenetur sit! Voluptatem autem hic non. Optio eum reprehenderit minima blanditiis</p>
    </div>
    <Link to="/login" >Login</Link>
    <Link to="/register" >Register</Link>  
    </div>
  )
}


export default Home

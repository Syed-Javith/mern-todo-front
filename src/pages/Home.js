import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-div'>
      <h1 className="center">Welcome Home</h1>

    <div>
    <p className="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim neque eius accusamus dolorum quisquamrepudiandae beatae illum, obcaecati corporis tenetur sit! Voluptatem autem hic non.Optio eu reprehenderit minima blanditiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim neque eius accusamus  dolorum quisquam repudiandae beatae illum, obcaecati corporis tenetur sit! Voluptatem autem hic non. Optio eum reprehenderit minima blanditiis</p>
    </div>
    <Link to="/login" ><button className='btn btn-outline-primary buttons'>Login</button></Link>
    <Link to="/register" ><button className='btn btn-outline-success buttons'>Register</button></Link>  
    </div>
  )
}


export default Home

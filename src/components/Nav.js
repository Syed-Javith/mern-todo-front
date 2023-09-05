import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link links" to='/' >Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link links" to='/login' >Login</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link links" to='/register' >Register</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link links" to='/todo' >Todo</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Nav

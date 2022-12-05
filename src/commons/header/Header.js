import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-sm bg-dark d-flex justify-content-around fixed-top">
        <h2 class="navbar-brand pt-2 px-1">Portfolio</h2>
        <ul class="nav" style={{ listStyle: "none", textDecoration: "none" }}>
          <li class="nav-item">
            <Link class="nav-link text-light" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light" to="/projects">Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light" to="/addproject">Add</Link>
          </li>
        </ul>
        <Link to="/login">
          <button className='btn-primary px-2'>Login</button>
        </Link>
      </nav>

    </>
  )
}
export default Header

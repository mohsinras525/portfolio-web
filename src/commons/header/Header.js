import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({success}) => {
  console.log("Mohsin1 props ==> ", success)

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark d-flex justify-content-around fixed-top">
        <h1 className="navbar-brand pt-2 px-1" style={{fontFamily:'cursive'}}>Portfolio</h1>
        <ul className="nav" style={{ listStyle: "none", textDecoration: "none" }}>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/" style={{fontFamily:'cursive'}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/projects" style={{fontFamily:'cursive'}}>Projects</Link>
          </li>
          {success && <li class="nav-item">
            <Link class="nav-link text-light" to="/addproject" style={{fontFamily:'cursive'}}>Add</Link>
          </li>}
        </ul>
        <Link to="/login">
          <button className='btn-primary px-2'>Login</button>
        </Link>
      </nav>

    </>
  )
}
export default Header

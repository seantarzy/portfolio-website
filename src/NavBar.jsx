import React from 'react'
import {NavLink, BrowserRouter as Router, Link} from 'react-router-dom'

export default class NavBar extends React.Component {

  render() {
    return (
        <Router>
      <ul>
        <li>
          <Link key = "Blogs" to="/blogs">Blogs </Link>
        </li>
        <li>
          {/* <NavLink key = "about" to="/about">About</NavLink> */}
        </li>
          
          <li>
            {/* <NavLink key = "projects" to="/projects">Projects</NavLink> */}
          </li>
          <li>
            {/* <NavLink key = "blogs" to="/blogs">Blogs</NavLink> */}
          </li>
      </ul>
      </Router>
    );
  }
}
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
          <Link key = "Projects" to="/Projects">Projects</Link>
        </li>
          
          <li>
            <NavLink key = "videos" to="/videos">Videos</NavLink>
          </li>
          <li>
            <NavLink key = "about" to="/about">About</NavLink>
          </li>
      </ul>
      </Router>
    );
  }
}
import React from 'react'
import {NavLink, BrowserRouter as Router, withRouter, Link} from 'react-router-dom'

export default class NavBar extends React.Component {

  render() {
    return (
        <Router>
          <nav>
      <ul>
        <li>
          <a key = "Home" href="/">Home </a>
        </li>
        <li>
          <a key = "Blogs" href = "/blogs">Blogs </a>
        </li>
        <li>
          <a key = "Projects" href="/projects">Projects</a>
        </li>
          
          <li>
            <a key = "videos" href="/videos">Videos</a>
          </li>
          <li>
            <a key = "about" href="/about">About</a>
          </li>
      </ul>
          </nav>
      </Router>
    );
  }
}
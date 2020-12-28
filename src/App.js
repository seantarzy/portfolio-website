import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './NavBar'
import Blogs from './Blogs.jsx'
import Home from './Home'
import Projects from './Projects'
import Videos from './Videos'
import About from './About'
import {
  Switch,
  Route,
  withRoute,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

class App extends React.Component{

   renderBlogs = ()=>{
     return <Blogs redirect={ () => this.props.history.push("/blogs")}/>
   }
   renderHome = ()=>{
     return <Home redirect={ () => this.props.history.push("/home")}/>
   }

  render(){

  return (
    <div className="App">
      <NavBar className="nav" />
      <Router>
          <Route
            path="/blogs"
            key={"blogs"}
          >
            <Blogs className= "blogs"/>
          </Route>
          <Route
            path="/projects"
            key={"projects"}
          >
            <Projects className= "projects"/>
          </Route>
          <Route
            path="/videos"
            key={"videos"}
          >
            <Videos className= "videos"/>
          </Route>
          <Route
            path="/about"
            key={"about"}
          >
            <About className= "about"/>
          </Route>
          <Route
            exact
            path="/"
            key={"home"}
            exact
          >
            <Home/>
          </Route>
      </Router>
    </div>
  );
  }
}

export default App;

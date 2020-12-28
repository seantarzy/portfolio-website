import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './NavBar'
import Blogs from './Blogs'
import Home from './Home'
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
            <Blogs/>
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

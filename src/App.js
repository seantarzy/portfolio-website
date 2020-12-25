import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './NavBar'
import Blogs from './Blogs'
import {
  Switch,
  Route,
  withRoute,
  BrowserRouter as Router,
} from "react-router-dom";

class App extends React.Component{

   renderBlogs = ()=>{
     return <Blogs redirect={ () => this.props.history.push("/blogs")}/>
   }
  render(){

  return (
    <div className="App">
      <NavBar className = "nav"/>
      <Router>
        <Switch>
          <Route
                path="/blogs"
                render={this.renderBlogs}
                key={"blogs"}
              />
              {/* <Route path="/login" render={this.renderLogin} key={"login"} />,
              <Route
                path="/register"
                render={this.renderRegister}
                key={"register"}
              />
        <Route path="/logout" render={this.renderLogout} key={"logout"} />,
        <Route path="/about" component={About} key={"about"} /> */} 
          {/* <Route path="/Blogs" exact render={this.renderBlogs} key={"blogs"} /> */}
          {/* <Route render={() => <p>Page not found</p>} key={"not-found"} /> */}
        </Switch>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;

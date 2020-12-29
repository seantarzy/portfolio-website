import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './NavBar'
import Blogs from './Blogs.jsx'
import Home from './Home'
import Projects from './Projects'
import Videos from './Videos'
import About from './About'
import mnemonicMaker from "./assets/mnemonic-maker.png";
import seaMonsterRiddle from "./assets/sea-monster-riddle.png";
import teacherToCoder from "./assets/teacher-to-coder.png";
import genuineLeader from "./assets/genuine-leader.png";
import Babe from './assets/babe-ruth.png'
import {
  Switch,
  Route,
  withRoute,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Mnemonic Maker",
        imageSrc: mnemonicMaker,
        link: "https://mnemonicmaker.netlify.app/",
      },
      {
        id: 2,
        name: "Sea Monster TedEd Riddle",
        imageSrc: seaMonsterRiddle,
        link: "https://github.com/seanytdawg/Sea-Monster-TED-Ed-Riddle",
      },
      {
        id: 3,
        name: "War Games",
        imageSrc: Babe,
        link: "https://github.com/seanytdawg/war_games",
      },
      {},
      {},
      {},
      {}
    ],
    blogs: [
      {
        id: 1,
        title: "School Teacher to coder",
        imageSrc: teacherToCoder,
        link:
          "https://medium.com/swlh/how-being-a-school-teacher-set-me-up-to-be-a-coder-3d977cbc30b3",
      },
      {
        id: 2,
        title: "The Genuine Leader pt. 1",
        imageSrc: genuineLeader,
        link: "https://seantarzy.medium.com/the-genuine-leader-39ed769e5b7c",
      },
      {
        id: 3,
        title: "Sea Monster TedEd Riddle Blog",
        imageSrc: seaMonsterRiddle,
        link:
          "https://seantarzy.medium.com/solving-the-sea-monster-ted-ed-riddle-using-vanilla-javascript-800fe02be6e0",
      },
    ],
    videos: [],
  };

  render() {
    return (
      <div className="App">
        <NavBar className="nav" />
        <Router>
          <Route path="/blogs" key={"blogs"}>
            <Blogs className="blogs" blogs={this.state.blogs} />
          </Route>
          <Route path="/projects" key={"projects"}>
            <Projects className="projects" projects={this.state.projects} />
          </Route>
          <Route path="/videos" key={"videos"}>
            <Videos className="videos" />
          </Route>
          <Route path="/about" key={"about"}>
            <About className="about" />
          </Route>
          <Route exact path="/" key={"home"} exact>
            <Home />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

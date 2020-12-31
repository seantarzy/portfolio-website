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
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

class App extends React.Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Mnemonic Maker",
        imageSrc: mnemonicMaker,
        description:
          "Ever use Quizlet? Now imagine those digital flashcards incorporating your favorite song lyrics to help make studying effective and fun. And not just any lyrics, but lyrics whose initials line up perfectly to those of the phrase or list you need to remember. Add these mnemonic devices to a playlist of your choosing and listen to your flashcards come to life!",
          tools: "React.js, Redux, Ruby on Rails, Rest-Client (for web scraping)",
        link: "https://mnemonicmaker.netlify.app/",
      },
      {
        id: 2,
        name: "Sea Monster TedEd Riddle",
        description:
          "I am a huge fan of TED-Ed riddles. When quarantine was in full-swing, my brother and I would pop one on the TV, and try to see who can solve it first (or if either of us could solve it at all). As a coder, I find that working through these riddles flexes the same kind of problem-solving muscles excersized in creating apps. I found that there was such a strong link between TED-Ed Riddles and coding, that I decided to bridge the gap even closer.",
        imageSrc: seaMonsterRiddle,
        tools: "Vanilla JS",
        link: "https://github.com/seanytdawg/Sea-Monster-TED-Ed-Riddle",
      },
      {
        id: 3,
        name: "War Games",
        imageSrc: Babe,
        description: "Like the card game 'War', except using baseball players and a particulair baseball statistic for the card's value",
        tools: "Vanilla JS, Ruby on Rails, React-Native",
        link: "https://github.com/seanytdawg/war_games",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "School Teacher to coder",
        imageSrc: teacherToCoder,
        description: "In this blog post I talk about how teaching helped me become a coder and draqw the parallels between pedogogy and programming.",
        link:
          "https://medium.com/swlh/how-being-a-school-teacher-set-me-up-to-be-a-coder-3d977cbc30b3",
      },
      {
        id: 2,
        title: "The Genuine Leader pt. 1",
        description: "A sci-fi short story. What if AI was big brother all along?",
        imageSrc: genuineLeader,
        link: "https://seantarzy.medium.com/the-genuine-leader-39ed769e5b7c",
      },
      {
        id: 3,
        title: "Sea Monster TedEd Riddle Blog",
        description: "I am a huge fan of TED-Ed riddles. When quarantine was in full-swing, my brother and I would pop one on the TV, and try to see who can solve it first (or if either of us could solve it at all). As a coder, I find that working through these riddles flexes the same kind of problem-solving muscles excersized in creating apps. I found that there was such a strong link between TED-Ed Riddles and coding, that I decided to bridge the gap even closer.",
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

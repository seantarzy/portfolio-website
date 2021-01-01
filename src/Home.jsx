import React, { Component } from 'react';
import Star1 from './assets/star1.png'
import './App.css'
import Comet from './assets/comet.png'
import Star2 from './assets/star-twinkle.png'
import NorthStar from './assets/north-star.png'
import GitLogo from './assets/github.png'
import MediumLogo from './assets/medium.png'
import LinkedInLogo from './assets/linkedin.png'
class Home extends Component {

  // top: 120px;
  // left: 100px;
  // height: 2px;
  // width: 2px;
  // animation-name: starTwinkle;
  // animation-duration: .5s;
  // animation-iteration-count: infinite;
  // animation-direction: alternate-reverse;

  componentDidMount = ()=>{
    // this.renderStars()
  }
  // renderStars = ()=>{
  //   let starDiv = document.getElementsByClassName("star")[0]
    
  //   let minY = 0
  //   let maxY = 300
  //   let minX = 0
  //   let maxX = 1000
  //   let i = 0;
  //   let left;
  //   let top
  //  while(i<100){
  //    star.height = '2'
  //    star.width = '2'
  //    left = Math.floor(Math.random() * Math.floor(maxX))
  //    top = Math.floor(Math.random() * Math.floor(maxY))
  //    star.margin-left = left
  //       star.top = top
  //       star.src = Star1
  //       star.className = "star-img"
  //       starDiv.append(star)
  //       i++
  //  }
  // }

  render() {

    
        return (
     <div className="home">
        <div className="App-header">
          
          <div className  = "home-head-text">
      <h1 className = "home-animated-text">
          Sean Tarzy
      </h1>
      <h1 className = "home-animated-subtext">
          Software Engineer
      </h1>
          </div>
      <div className = "logo-container">
        <a href = "https://github.com/seanytdawg" target = "_blank" >
      <img src = {GitLogo} className = "logo"/>
        </a >
        <a href = "https://www.linkedin.com/in/sean-tarzy-997076110/" target = "_blank">
      <img src = {LinkedInLogo} className = "logo"/>
        </a>
        <a href = "https://seantarzy.medium.com/" target = "_blank">
      <img src = {MediumLogo} className = "logo"/>
        </a>
      </div>
              <img src = {NorthStar} className = "north-star" />
      <div className = "comet">

        <img src = {Comet} />
      </div>
      <div className = "star">
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      <img src = {Star1} />
      </div>
      </div>
    </div>
        );
    }
}

export default Home;
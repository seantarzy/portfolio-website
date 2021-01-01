import React, { Component } from 'react';
import './App.css'
import Spaceship from './assets/spaceship.png'
import Astronaut from './assets/astronaut.png'
import {Button} from 'react-bootstrap'
import Modal from 'react-modal'
import SpaceRock2 from './assets/space-rock2.png'
class Projects extends Component {
  state = {
    showModal: false,
    featuredProject: null,
  };


  componentDidMount = () => {
    this.props.projects.forEach((project) => {
      let projectName = document.createElement("footer");
      projectName.innerText = project.name;
      let astroDiv = document.createElement("div");
      let astroImg = document.createElement("img");
      astroImg.src = Astronaut;
      astroImg.height = "100";
      astroImg.width = "100";
      astroDiv.append(astroImg);
      astroDiv.append(projectName);
      // astroDiv.className = "astronaut";
      astroDiv.onclick = (e)=>{this.openModalAndSetFeatured(e, project)}
      astroDiv.cursor = 'pointer'
      document.getElementsByClassName("astronaut-container")[0].append(astroDiv);
    });

    let numOfRocks = 0;
    while(numOfRocks < 10){
      let rockImg = document.createElement('img')
      rockImg.src = SpaceRock2
      document.getElementsByClassName('space-rocks')[0].append(rockImg)
      numOfRocks++
    }
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  openModalAndSetFeatured = (e, project) => {
      e.preventDefault()
    this.setState({ showModal: true, featuredProject: project });
    console.log("state: ", this.state)
  };
  render() {
    return (
      <div className="projects">
        <div className="projects-animated-text">
          <h1>Projects</h1>
          <h2>Click on an astronaut below</h2>
        </div>
        <div className="spaceship">
          <img src={Spaceship} />
        </div>
        <div className="project-astronauts">
          <div className="astronaut-container"></div>
          {this.state.featuredProject ? (
            <Modal
              scrollable={true}
              isOpen={this.state.showModal}
              onRequestClose={this.handleClose}
              animation={false}
              className="modal"
              scrollable={true}
            >
              <p className="x-box" onClick={this.handleClose}>
                ☒
              </p>
              <div className="modal-body">
                <h2>{this.state.featuredProject.name}</h2>
                <p>{this.state.featuredProject.description}</p>

                <h5>Tools Used: {this.state.featuredProject.tools}</h5>
                <footer>
                  Click me
                  <br>
                  </br>
                  <a
                    href={this.state.featuredProject.link}
                    target="_blank"
                    className="project-link"
                  >
                    <img
                      src={this.state.featuredProject.imageSrc}
                      className="modal-image"
                    />
                    {/* {this.state.featuredProject.name} */}
                  </a>
                </footer>
              </div>
            </Modal>
          ) : null}
        </div>
        <div className="space-rocks"></div>
      </div>
    );
  }
}

export default Projects;
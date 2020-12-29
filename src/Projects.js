import React, { Component } from 'react';
import './App.css'
import Spaceship from './assets/spaceship.png'
import Astronaut from './assets/astronaut.png'
import {Button} from 'react-bootstrap'
import Modal from 'react-modal'
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
      astroDiv.className = "astronaut";
      astroDiv.onclick = (e)=>{this.openModalAndSetFeatured(e, project)}
      document.getElementsByClassName("project-astronauts")[0].append(astroDiv);
    });
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
        <text className="animated-text"> Projects</text>
        <div className="spaceship">
          <img src={Spaceship} />
        </div>
        <div className="project-astronauts">
          {this.state.featuredProject ? (
            <Modal
              isOpen={this.state.showModal}
              onRequestClose={this.handleClose}
              animation={false}
              className="modal"
            >
              <div>
                <h1>{this.state.featuredProject.name}</h1>
                {this.state.featuredProject.description}
                <footer>
                  <img
                    src={this.state.featuredProject.imageSrc}
                    className="modal-image"
                  />
                  Check it out:
                  <a href={this.state.featuredProject.link}
                    target = "_blank"
                  >
                    {this.state.featuredProject.name}
                  </a>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                </footer>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Projects;
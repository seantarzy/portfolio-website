import React, { Component } from 'react';
import './App.css'
import Spaceship from './assets/spaceship.png'
class Projects extends Component {
    render() {
        return (
            <div className = "projects"> 
                <text>yo projects</text>
                <div className="spaceship">
                <img src = {Spaceship}/>
                </div>
            </div>
        );
    }
}

export default Projects;
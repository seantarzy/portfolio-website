import React, { Component } from 'react';
import SailBoat from './assets/sailboat.png'
import './App.css'
class Blogs extends Component {

    render() {
        return (
            <div className= "blogs" >
                <div>
                <text className = "blogs-animated-text">
                 Blogs   
                </text>
                <div className = "sailboat">
                <img src={SailBoat} className = "sailboat"/>
                <img src={SailBoat} className = "sailboat"/>
                <img src={SailBoat} className = "sailboat"/>
                </div>
                </div>
            </div>
        );
    }
}

export default Blogs;
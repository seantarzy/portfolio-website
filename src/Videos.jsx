import React, { Component } from 'react';
import Satelite from './assets/satelite.png'
import './App.css'

class Videos extends Component {
    render() {
        return (
            <div className = "videos">
                <div className = "videos-animated-text" >
                    <text>Coming Soon</text>
                </div>
                {/* <div className = "videos-animated-text" >
                <h1 >Coming Soon</h1>
                </div> */}
                <div className = "satelite">
                    <img src = {Satelite}/>
                    <img src = {Satelite}/>
                    <img src = {Satelite}/>
                </div>
            </div>
        );
    }
}

export default Videos;
import React, { Component } from 'react';
import './App.css'
class About extends Component {
    render() {
        return (
            <div className = "about">
                {/* <p className = "about-sean" className = "about-sean"> */}
                {/* <h1 className = "about-animated-text">About</h1> */}
                <div className = "about-sean">
                    <h1 className = "about-animated-text">
                    About
                    </h1>
                    <text>
                    Sean Tarzy is a software engineer with a knack for problem solving and creativity.
                    </text>
                    <br>
                    </br>
                    <br>
                    </br>
                    <text>
                    Languages: English, Spanish, Javascript, Ruby, SQL
                    </text>
                     <br>
                    </br>
                     <br>
                    </br>
                    <text>
                    Education: Binghamton University, Flatiron School
                    </text>
                     <br>
                    </br>
                     <br>
                    </br>
                    <text>
                    Hobbies: Baseball, Movies, Bass Guitar, Science-Fiction
                    </text> 
                </div>
            </div>
        );
    }
}

export default About;
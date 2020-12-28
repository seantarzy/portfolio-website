import React, { Component } from 'react';
import testPic from './assets/logo512.png'
import './App.css'
class Blogs extends Component {

    render() {
        return (
            <div className= "black-text">
                <text>yo blogs</text>
                <img src = {testPic}/>
            </div>
        );
    }
}

export default Blogs;
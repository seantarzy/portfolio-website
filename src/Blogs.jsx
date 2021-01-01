import React, { Component } from 'react';
import SailBoat from './assets/sailboat.png'
import Book from './assets/book.png'
import Modal from 'react-modal'
import './App.css'
class Blogs extends Component {

state = {
    featuredBlog: null,
    showModal: false
}

setFeaturedAndOpen = (e, blog)=>{
    e.preventDefault()
    this.setState({featuredBlog: blog, showModal: true})
}
    componentDidMount = ()=>{
        this.props.blogs.forEach((blog)=>{
            let blogDiv = document.createElement('div')
            let bookImg = document.createElement('img')
            bookImg.src = Book
            blogDiv.append(bookImg)
            let blogTitle = document.createElement('footer')
            blogTitle.innerText = blog.title
           blogDiv.append(blogTitle)
           let blogContainer = document.getElementsByClassName('blog-container')[0]
           blogContainer.append(blogDiv)
           blogDiv.onclick = (e)=>this.setFeaturedAndOpen(e,blog)
        })
    }

    handleClose = ()=>{
        this.setState({showModal: false})
    }
    render() {
        return (
            <div className= "blogs" >
                <div>
                    <div className = "blogs-animated-text">
                    <h1 >
                    Blogs   
                    </h1 >
                    <h2>
                    Click on a book below
                    </h2>
                    </div>
                <div className = "sailboat">
                <img src={SailBoat} className = "sailboat" />
                <img src={SailBoat} className = "sailboat"/>
                <img src={SailBoat} className = "sailboat"/>
                </div>
                <div className = "blog-container">
                    {this.state.featuredBlog ? (
            <Modal
              isOpen={this.state.showModal}
              onRequestClose={this.handleClose}
              animation={false}
              className="modal"
            >
              <div className="modal-body" scrollable = {true}>
              <p className = "x-box" onClick = {this.handleClose}>☒</p>
                <h2>{this.state.featuredBlog.title}</h2>
                <p>{this.state.featuredBlog.description}</p>
                <footer className = "modal-footer">
                  Click me
                  <br>
                  </br>
                  <a href={this.state.featuredBlog.link} target="_blank">
                    {/* {this.state.featuredBlog.title} */}
                <img
                  src={this.state.featuredBlog.imageSrc}
                  className="modal-image"
                  />
                  </a>
                  
                </footer>
              </div>
            </Modal>
          ) : null}
                </div>
                </div>
            </div>
        );
    }
}

export default Blogs;
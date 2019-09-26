import React, { Component } from 'react';
import './app.css';
import io from 'socket.io-client';
const socket = io(window.location.origin);

class App extends Component {
  constructor() {
    super();
    this.state = { 
      classes: [],
      form: {},
      currentClass: {},
      fullscreen: false
    };
  }

  componentDidMount() {
    this.listenHandlers();
  }

  listenHandlers = () => {
    socket.on("receive all", msg => {
      let classes = msg.data;
      console.log(classes)
    });
  }

  getAll = () => {
    console.log("Getting all classes!");
    socket.emit("getAll");
  }

  createClass = () => {

  }

  goFullscreen = (e) => {
    // console.log("clicked", e.target.parentNode.id)
    let elem = e.target.parentNode;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      }); 
    } else {
      document.exitFullscreen();
    }
  }

  render() {

    return (
      <div>
        <button onClick={this.getAll} >Get All Classes</button>
        <div className="class-box" id="box">
          <button onClick={(e)=>{this.goFullscreen(e)}} >Enter Fullscreen display mode</button>
          <h3>Classroom 1</h3>
          <h1>Software Engineering Immersive</h1>
          <p>Instructor: Akira Wong</p>
        </div>
      </div>
    );
  }
}

export default App;
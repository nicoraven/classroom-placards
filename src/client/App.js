import React, { Component } from 'react';
import './app.css';
import io from 'socket.io-client';
const socket = io(window.location.origin);

class App extends Component {
  constructor() {
    super();
    this.state = { 
      username: null,
      news: 'no news yet'
    };
  }

  componentDidMount() {
    this.listenHandlers();
  }

  listenHandlers = () => {
    socket.on("receive news", msg => {
      this.setState({news: msg.content}, ()=>{
        console.log("message received!")
      });
    });

    socket.on("receive all", msg => {
      console.log(msg)
    });
  }

  getNews = () => {
    console.log("Getting news!");
    socket.emit("fetch news");
  }

  getAll = () => {
    console.log("Getting all classes!");
    socket.emit("getAll");
  }

  render() {
    let { username } = this.state;
    // console.log(window.location)
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <p className="App-intro">
          This is the latest news: {this.state.news}
        </p>
        <button onClick={this.getNews} >Get News</button>
        <button onClick={this.getAll} >Get All Classes</button>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";

import io from 'socket.io-client';
const url = window.location.origin + "/socket";
const socket = io(url);

class Home extends Component {
  getNewsHandler = () => {
    console.log("get news");
    socket.emit("fetchNews");
  }

  render() {
    let news = this.props.state.news;

    return (
      <div>
        <h1>This is the Home page</h1>
        <h3>Current News: <span id="news">{news}</span></h3>
        <button onClick={()=>{this.getNewsHandler()}}>Fetch news</button>
      </div>
    );
  }
}

export default Home;
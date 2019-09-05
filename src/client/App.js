import React, { Component } from 'react';
import './app.css';
import io from 'socket.io-client';
const socket = io('http://localhost:8080');

class App extends Component {
  constructor() {
    super();
    this.state = { 
      username: null,
      news: 'no news yet'
    };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }))
      .then(() => {this.getNews()})
  }

  getNews = () => {
    socket.emit("fetch news");
    socket.on("receive news", msg => {
      this.setState({news: msg.content});
    });
  }

  render() {
    const { username } = this.state;
    console.log(window.location)
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <p className="App-intro">
          This is the latest news: {this.state.news}
        </p>
      </div>
    );
  }
}

export default App;
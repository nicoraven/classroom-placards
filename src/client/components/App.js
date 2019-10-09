import React, { Component } from "react";
import New from './new';
import Placard from './placard';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import io from 'socket.io-client';
const url = window.location.origin + "/socket";
const socket = io(url);

class App extends Component {
    constructor() {
        super();
        this.state = {
            classes: [],
            news: "Loading latest news"
        }
    }

    componentDidMount = () => {
        console.log("mounted");
        this.socketListeners();
    }

    socketListeners = () => {
        socket.on("receiveNews", (response) => {
            let updatedNews = response.content;
            this.setState({news: updatedNews});
        })
    }

    render() {
        console.log("state", this.state);
        return (
            <Router>
                <div id="app-wrapper">
                    <h1>Classroom Placards</h1>
                    <Switch>
                        <Route path="/" exact render={() => <Home state={this.state} />} />
                        <Route path="/new" component={New} />
                        <Route path="/placard" component={Placard} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
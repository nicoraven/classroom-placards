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
            classes: []
        }
    }

    componentDidMount = () => {
        console.log("mounted")
    }

    render() {
        return (
            <Router>
                <div id="app-wrapper">
                    <h1>Classroom Placards</h1>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/new" component={New} />
                        <Route path="/placard" component={Placard} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
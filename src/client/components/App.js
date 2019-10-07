import React, { Component } from "react";
import New from './new';
import Placard from './placard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import io from 'socket.io-client';
// const socket = io(window.location.origin);

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

class App extends Component {
    constructor() {
        this.state = {
            classes: []
        }
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
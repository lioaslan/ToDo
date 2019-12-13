import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

export default class App extends Component {
    render(){
        return (
            <Router>
                <Route extra path="/login" component={Login}/>
                <Route extra path="/" component={Home}/>
            </Router>
        )
    }
}
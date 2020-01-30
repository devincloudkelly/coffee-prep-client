import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';

export class HomeScreen extends Component {
    render() {
        return (
            <div>
                I am the home screen
                <Login/>
                <Signup />
            </div>
        );
    }
}

export default HomeScreen;

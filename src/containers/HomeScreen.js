import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import {connect} from 'react-redux'
import LoginHOC from '../HOCs/LoginHOC'

class HomeScreen extends Component {
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

export default connect(null, null, null, LoginHOC)(HomeScreen)

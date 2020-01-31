import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import {connect} from 'react-redux'
import LoginHOC from '../HOCs/LoginHOC'
import { Redirect } from 'react-router-dom'

class HomeScreen extends Component {
    render() {
        if (this.props.jwt) {
            return <Redirect to='/profile' />
        }
        return (
            <div>
                I am the home screen
                <Login/>
                <Signup />
            </div>
        );
    }
}

const mapStateToProps= state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        jwt: state.jwt
    }
}

export default connect(mapStateToProps)(HomeScreen)

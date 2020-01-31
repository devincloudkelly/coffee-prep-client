import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import App from '../App'

// const {from} = this.props.location.state
class HomeScreen extends Component {

    render() {
        if (localStorage.getItem('jwt')) {
            return <Redirect to='/profile'/>
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

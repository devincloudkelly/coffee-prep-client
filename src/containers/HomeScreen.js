import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import {connect} from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

// const {from} = this.props.location.state
class HomeScreen extends Component {

    
    render() {
        const{ location, match, history } = this.props
        console.log('location, match and history in home screen..', location, match, history)
        console.log(this.props)
        // if (localStorage.getItem('jwt')) {
        //     return <Redirect to='/profile'/>
        // }
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

export default withRouter(connect(mapStateToProps)(HomeScreen))

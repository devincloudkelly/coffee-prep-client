import React from 'react';
import MainContainer from './MainContainer';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


const Profile = (props) => {

console.log(props)
        return (
            <div>
                <h5>Welcome back {props.name}</h5>
                <MainContainer />
                <Link to='/preparations/new'>Link to new preparation</Link>
            </div>
        );
    
}

const mapStateToProps = state => {
    const {user} = state
    return {
        name: user.name,
        jwt: state.jwt, 
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(Profile);

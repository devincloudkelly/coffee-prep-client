import React, { Component } from 'react';
import MainContainer from './MainContainer';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'


export class Profile extends Component {



    render() {
        return (
            <div>
                I am the Profile screen
                <Link to='/preparations/new'>Link to new preparation</Link>
                <NavBar />
                <MainContainer />
            </div>
        );
    }
}

export default Profile;

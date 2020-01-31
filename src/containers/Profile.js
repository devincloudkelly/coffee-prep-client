import React, { Component } from 'react';
import MainContainer from './MainContainer';
import NavBar from '../components/NavBar';


export class Profile extends Component {



    render() {
        return (
            <div>
                I am the Profile screen
                <NavBar />
                <MainContainer />
            </div>
        );
    }
}

export default Profile;

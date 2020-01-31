import React, { Component } from 'react';
import MainContainer from './MainContainer';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'


export const Profile = () => {


        return (
            <div>
                <NavBar />
                <h1>I am the Profile screen</h1>
                <MainContainer />
                <Link to='/preparations/new'>Link to new preparation</Link>
            </div>
        );
    
}

export default Profile;

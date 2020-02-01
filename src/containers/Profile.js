import React from 'react';
import MainContainer from './MainContainer';
import { Link } from 'react-router-dom'


const Profile = () => {


        return (
            <div>
                <h1>I am the Profile screen</h1>
                <MainContainer />
                <Link to='/preparations/new'>Link to new preparation</Link>
            </div>
        );
    
}

export default Profile;

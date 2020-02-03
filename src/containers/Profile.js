import React from 'react';
import {connect} from 'react-redux'
import PrepViewer from './PrepViewer';


const Profile = (props) => {

console.log(props)
        return (
            <div>
                <h5>Welcome back {props.name}</h5>
                <PrepViewer />
                
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

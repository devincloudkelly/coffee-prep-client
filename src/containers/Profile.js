import React from 'react';
import {connect} from 'react-redux'
import PrepViewer from './PrepViewer';
import { Container } from 'semantic-ui-react';


const Profile = (props) => {

console.log(props)
        return (
            <Container >
                <div className='ui yellow label'>
                Welcome back 
                <div className='detail'>{props.name}</div>
                </div>
                <PrepViewer />
                
            </Container>
        );
    
}

const mapState = state => {
    const {user} = state
    return {
        name: user.name,
        jwt: state.jwt, 
        loggedIn: state.loggedIn
    }
}

export default connect(mapState)(Profile);

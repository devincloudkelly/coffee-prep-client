import React from 'react';
import {connect} from 'react-redux'
import PrepViewer from './PrepViewer';
import { Container, Label } from 'semantic-ui-react';


const Profile = (props) => {

        return (
            <Container inverted style={{minHeight: '70vh'}}>
                <Label color='yellow' image style={{marginBottom: '12px', marginTop: '8px'}}>
                Welcome back 
                <Label.Detail>{props.name}</Label.Detail>
                </Label>
                
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

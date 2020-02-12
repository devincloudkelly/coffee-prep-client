import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Segment, Container, Divider } from 'semantic-ui-react'

const background = 'https://images.pexels.com/photos/1235717/pexels-photo-1235717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

class HomeScreen extends Component {
    state={
        logIn: false
    }

    toggleSignIn = () => {
        this.setState(prevState => ({
            logIn: !prevState.logIn
        }))
    }
    
    render() {
        return (
            <Container style={{marginTop: '20px'}}>
            <Segment inverted>            
            <Grid stackable columns={2} >
                {/* <Image src='https://images.pexels.com/photos/1235717/pexels-photo-1235717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/> */}
                <Grid.Column className='home-screen-title-column' textAlign='center' width={11} style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '80vh'
                }}>
                <h1 className='home-screen-title'>BREW BETTER COFFEE</h1>
                <br/><br/><br/><br/>
                <h2 className='home-screen-snippet'>Coffee Mentor allows you to save your favorite coffee preparations, share them with friends, and learn from the best coffee enthusiasts around the world. Learn, share and start brewing your best!</h2>
                </Grid.Column>
                <Grid.Column  width={5}>
                {this.state.logIn
                ? <Login toggleSignIn={this.toggleSignIn}/>
                : <Signup toggleSignIn={this.toggleSignIn}/>
                }
                </Grid.Column>     
            </Grid>
            </Segment>
            </Container>
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

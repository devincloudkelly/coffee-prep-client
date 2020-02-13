import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Segment, Container, Divider, Responsive, Icon } from 'semantic-ui-react'

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
                <Grid.Column  width={5}>
                {this.state.logIn
                ? <Login toggleSignIn={this.toggleSignIn}/>
                : <Signup toggleSignIn={this.toggleSignIn}/>
                }
                </Grid.Column>     
                {/* <Responsive minWidth={Responsive.onlyTablet.minWidth}> */}
                <Responsive minWidth={Responsive.onlyTablet.minWidth} as={Grid.Column} className='home-screen-title-column' textAlign='center' width={11} style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '80vh',
                    opacity: '0.7'
                }}>
                <h1 className='home-screen-title'>BREW BETTER COFFEE</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h3 className='home-screen-snippet' style={{backgroundColor: '#1a1c1d', color: '#ffffff'}}>Create, Share and Learn from other coffee enthusiasts.</h3>
                {/* </Grid.Column> */}
                </Responsive>
                <Responsive as={Grid.Column} textAlign='center' width={11} {...Responsive.onlyMobile}>
                    <Divider horizontal inverted>Why Coffee Mentor?</Divider>
                    <h2 className='home-screen-title'><Icon name='coffee'></Icon> Learn from other coffee enthusiasts.</h2>
                    <h2 className='home-screen-title'><Icon name='coffee'></Icon> Save your favorite coffee preps</h2>
                    <h2 className='home-screen-title'><Icon name='coffee'></Icon> Perfect your craft</h2>
                </Responsive>
                {/* <Grid.Column textAlign='center' width={11} style={{
                    backgroundColor: 'gray',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '80vh',
                    color: 'Black'
                }}
                >
                <h1 className='home-screen-title'>Create, Share and Learn from other coffee enthusiasts.</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Grid.Column> */}
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

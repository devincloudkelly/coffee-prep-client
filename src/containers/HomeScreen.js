import React, { Component } from 'react';
import Login from '../components/Login'
import Signup from '../components/Signup';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, Container, Segment, Image} from 'semantic-ui-react'

const background = 'https://images.pexels.com/photos/1235717/pexels-photo-1235717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
const style = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

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
        const{ location, match, history } = this.props
        console.log('location, match and history in home screen..', location, match, history)
        console.log(this.props)
        // if (localStorage.getItem('jwt')) {
        //     return <Redirect to='/profile'/>
        // }
        return (
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh'
            }}>

            <Grid stackable columns={2}>
                {/* <Image src='https://images.pexels.com/photos/1235717/pexels-photo-1235717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/> */}
                <Grid.Column className='home-screen-title-column' textAlign='center' width={11}>
                    <Segment className='home-title-segment' inverted>
                <h1 className='home-screen-title'>BREW BETTER COFFEE</h1>

                    </Segment>
                </Grid.Column>
                <Grid.Column  width={5}>
                <Segment inverted>
                {this.state.logIn
                ? <Login toggleSignIn={this.toggleSignIn}/>
                : <Signup toggleSignIn={this.toggleSignIn}/>
                }
                </Segment>
                </Grid.Column>
     
            </Grid>
            </div>
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

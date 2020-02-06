import React, { Component } from 'react';
import Fetch from '../services/Adapter'
// import {loggedInUser} from '../action/coffeeAction'
import CoffeeAction from '../action/coffeeAction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


export class Signup extends Component {
    
    state = {
        name: '',
        email_address: '',
        password: ''
    }
    
    handleInput = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSignup = (e) => {
        e.preventDefault()
        Fetch.signup(this.state.name, this.state.email_address, this.state.password)
        // .then(console.log)
        .then(data => {
            const preps = [];
            localStorage.setItem('jwt', data.jwt);
            this.props.loggedInUser(data.user.id, data.user.name, data.user.email_address, preps, data.jwt)})
        .then(()=> {
            this.props.history.push('/profile')
    })
    }
    
    render() {
        return (
            <div>
                This is the Signup component
            <form onSubmit={e=> this.handleSignup(e)}>
                <label>
                    Name
                    <input name='name'  placeholder='enter your name' onChange={this.handleInput}/>
                </label>
                <label>
                    Email
                    <input name='email_address'  placeholder='enter your email address' onChange={this.handleInput}/>
                </label>
                <label>
                    Password
                    <input type='password' name='password' placeholder='create a password' onChange={this.handleInput}/>
                </label>
                <input type='submit' value='Sign Up'></input>
            </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggedInUser: (id, name, email, preps, jwt) => dispatch(CoffeeAction.loggedInUser(id, name, email, preps, jwt))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Signup));

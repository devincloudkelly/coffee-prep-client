import React, { Component } from 'react';
import Fetch from '../services/Adapter'
import CoffeeAction from '../action/coffeeAction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'


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
        .then(data => {
            const preps = [];
            localStorage.setItem('jwt', data.jwt);
            this.props.loggedInUser(data.user.id, data.user.name, data.user.email_address, preps, data.jwt)})
        .then(()=> {
            this.props.history.push('/profile')
    })
    }

    toggleSignIn = () => {
        this.props.toggleSignIn()
    }
    
    render() {
        return (
            <>
            <Form inverted onSubmit={e=> this.handleSignup(e)}>
               <h3>Sign Up</h3>
                <Form.Field>
                <label>
                    Name
                    <input name='name'  placeholder='enter your name' onChange={this.handleInput}/>
                </label>
                </Form.Field>
                <Form.Field>
                <label>
                    Email
                    <input name='email_address'  placeholder='enter your email address' onChange={this.handleInput}/>
                </label>
                </Form.Field>
                <Form.Field>
                <label>
                    Password
                    <input type='password' name='password' placeholder='create a password' onChange={this.handleInput}/>
                </label>
                </Form.Field>
                <Form.Field control={Button}>
                    Sign Up
                </Form.Field>
            </Form>
            <br/>
            <p>Already have an account? <a href='#' onClick={this.toggleSignIn}>Sign in here</a></p>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggedInUser: (id, name, email, preps, jwt) => dispatch(CoffeeAction.loggedInUser(id, name, email, preps, jwt))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Signup));

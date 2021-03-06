import React, { Component } from 'react';
import { connect } from 'react-redux' 
// import {loggedInUser} from '../action/coffeeAction'
import CoffeeAction from '../action/coffeeAction'
import Fetch from '../services/Adapter'
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'


export class Login extends Component {
    state = {
        email_address: '',
        password: ''
    }
    

    handleInput = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    
    handleLogin = (e) => {
        e.preventDefault()
        Fetch.login(this.state.email_address, this.state.password)
        .then(data => {
            localStorage.setItem('jwt', data.jwt)
            this.props.loggedInUser(data.user.id, data.user.name, data.user.email_address, data.userPreps, data.jwt)})
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
                <Form inverted onSubmit={e=> this.handleLogin(e)}>
                <h3>Log In</h3>
                    <Form.Field>
                    <label>
                        Email Address
                        <input name='email_address'  placeholder='email address' onChange={e => this.handleInput(e)}/>
                    </label>
                    </Form.Field>
                    <Form.Field>
                    <label>
                        Password
                        <input type='password' name='password' placeholder='password' onChange={e => this.handleInput(e)}/>
                    </label>
                    </Form.Field>
                    <Form.Field >
                    <Button type='submit' value='Log In'>Log In</Button>
                    </Form.Field>
                </Form>
                <br/>
                <p>Don't have an account yet? <a href='' onClick={this.toggleSignIn}>Sign up here</a></p>
            </>
            );
         
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggedInUser: (id, name, email, preps, jwt) => dispatch(CoffeeAction.loggedInUser(id, name, email, preps, jwt))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login))

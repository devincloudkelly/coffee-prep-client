import React, { Component } from 'react';
import { connect } from 'react-redux' 
import {loggedInUser} from '../action/coffeeAction'
import Fetch from '../services/Adapter'


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
        .then(data => {return loggedInUser(data.user.name, data.user.email_address, data.userPreps)})
    }
    render() {
        return (
            <div>
                This is the login component
                <form onSubmit={e=> this.handleLogin(e)}>
                    <label>
                        <input name='email_address'  placeholder='email address' onChange={e => this.handleInput(e)}/>
                    </label>
                    <label>
                        <input type='password' name='password' placeholder='password' onChange={e => this.handleInput(e)}/>
                    </label>
                    <input type='submit' value='Log In'></input>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggedInUser: (name, email, preps) => dispatch(loggedInUser(name, email, preps))
    }
}

export default connect(null, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux' 
import {loggedInUser} from '../action/coffeeAction'
import Fetch from '../services/Adapter'
import { withRouter } from 'react-router-dom'


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

        // add code below to clear state after user logs in.
        // .then( this.setState({
        //     email_address: '',
        //     password: ''
        // }))
       
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

// const mapStateToProps = state => {
//     return {
        
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        loggedInUser: (id, name, email, preps, jwt) => dispatch(loggedInUser(id, name, email, preps, jwt))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login))

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux' 
import {loggedInUser} from '../action/coffeeAction'
import Fetch from '../services/Adapter'
import LoginHOC from '../HOCs/LoginHOC'



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
        .then(data => {this.props.loggedInUser(data.user.id, data.user.name, data.user.email_address, data.userPreps, data.jwt)})
        
        
        // .then(() => {
        //     if (this.props.loggedIn){
        //        return <Redirect to='/profile' />
        //     }
        // })
        // .then( this.setState({
        //     email_address: '',
        //     password: ''
        // }))
       
    }
    render() {
        console.log(this.props)
        if (this.props.jwt) {
            return <Redirect to='/profile' />
        }
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

const mapStateToProps= state => {
    return {
        loggedIn: state.loggedIn,
        user: state.user,
        jwt: state.jwt
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggedInUser: (id, name, email, preps, jwt) => dispatch(loggedInUser(id, name, email, preps, jwt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, LoginHOC)(Login)

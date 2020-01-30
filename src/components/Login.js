import React from 'react';
import Fetch from '../services/Adapter'

const Login = () => {

    // const handleEmail = e => {
    //     return e.target.value
    // }
    // const handlePassword = e => {
    //     return e.target.value
    // }

    const handleLogin = (e) => {
        e.preventDefault()
       
        // console.log()
        Fetch.login('name@gmail.com', 'name')
    }
    return (
        <div>
            This is the login component
                <form onSubmit={e=> handleLogin(e)}>
                    <label>
                        <input name='email_address'  placeholder='email address' />
                    </label>
                    <label>
                        <input type='password' name='password' placeholder='password' />
                    </label>
                    <input type='submit' value='Log In'></input>
                </form>
        </div>
    );
}

export default Login;

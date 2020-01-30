import React from 'react';
import Fetch from '../services/Adapter'

const Signup = () => {

    const handleSignup = (e) => {
        e.preventDefault()
       
        // console.log()
        Fetch.signup('name', 'name@gmail.com', 'name')
    }

    return (
        <div>
            This is the Signup component
            <form onSubmit={e=> handleSignup(e)}>
                <label>
                    Name
                    <input name='name'  placeholder='enter your name' />
                </label>
                <label>
                    Email
                    <input name='email_address'  placeholder='enter your email address' />
                </label>
                <label>
                    Password
                    <input type='password' name='password' placeholder='create a password' />
                </label>
                <input type='submit' value='Sign Up'></input>
            </form>
        </div>
    );
}

export default Signup;

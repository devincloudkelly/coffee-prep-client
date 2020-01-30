import React, { Component } from 'react';
import Fetch from '../services/Adapter'


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

export default Signup;


// import React from 'react';
// const Signup = () => {

//     const handleSignup = (e) => {
//         e.preventDefault()
       
//         // console.log()
//         Fetch.signup('name', 'name@gmail.com', 'name')
//     }

//     return (
//         <div>
//             This is the Signup component
//             <form onSubmit={e=> handleSignup(e)}>
//                 <label>
//                     Name
//                     <input name='name'  placeholder='enter your name' />
//                 </label>
//                 <label>
//                     Email
//                     <input name='email_address'  placeholder='enter your email address' />
//                 </label>
//                 <label>
//                     Password
//                     <input type='password' name='password' placeholder='create a password' />
//                 </label>
//                 <input type='submit' value='Sign Up'></input>
//             </form>
//         </div>
//     );
// }

// export default Signup;
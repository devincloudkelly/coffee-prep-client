import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CoffeeAction from '../action/coffeeAction'

export class NavBar extends Component {

    handleLogout = (e) => {
        this.props.logOut()
        localStorage.setItem('jwt', '')
    }

    render() {
        return (
            <div>
                <Link to='/'>
                <button onClick={this.handleLogout}>Logout</button>
                </Link>
                NavBar
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(CoffeeAction.logOut())
    }
}

export default connect(null, mapDispatchToProps)(NavBar);

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CoffeeAction from '../action/coffeeAction'
import { Input, Menu } from 'semantic-ui-react'

export class NavBar extends Component {
    state = {
        activeItem: ''
    }

    handleItemClick = (e, {name}) => this.setState({ activeItem: name})

    handleLogout = (e) => {
        this.props.logOut()
        localStorage.setItem('jwt', '')
    }

    handleProfile = () => {
        console.log('handling profile click')
    }



    render() {
        const { activeItem } = this.state
        return (
            <Menu secondary>
                <Link to='/profile'>
                <Menu.Item 
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}
                />
                </Link>
                <Link to='/preparations/new'>
                    <Menu.Item
                    name='new prep'
                    active={activeItem === 'new prep'}
                    />
                </Link>
                <Menu.Menu position='right'>
                <Link to='/'><Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleLogout}
                />
                </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(CoffeeAction.logOut())
    }
}

export default connect(null, mapDispatchToProps)(NavBar);

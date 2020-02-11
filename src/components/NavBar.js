import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CoffeeAction from '../action/coffeeAction'
import { Menu } from 'semantic-ui-react'

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

    // handleBrowse() {
    //     console.log('fetching preps from navbar link...')
    // }

    render() {
        if (!this.props.loggedIn){
            return <div></div>
        }
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
                <Link to='/browse'>
                    <Menu.Item 
                    name='browse'
                    active={activeItem === 'browse'}
                    // onClick={this.handleBrowse}
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

const mapState = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatch = dispatch => {
    return {
        logOut: () => dispatch(CoffeeAction.logOut())
    }
}

export default connect(mapState, mapDispatch)(NavBar);

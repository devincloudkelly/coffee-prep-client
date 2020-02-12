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
                <Menu pointing secondary stackable inverted size='large' style={{backgroundColor: '#e34b2a', alignItems: 'center'}}>
                <Link to='/profile'>
                    <Menu.Item
                        name='profile'
                        active={activeItem === 'logo'}
                        onClick={this.handleItemClick}
                        >
                        <img src={require('/Users/devinkelly/Flatiron/Mod_5/coffee-mentor-project/coffee-prep-client/src/images/coffee-mentor-press-red-logo-white-text.gif')} style={{width: '13rem'}}/>
                    </Menu.Item>
                        </Link>
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
                    onClick={this.handleItemClick}
                    />
                </Link>
                <Link to='/browse'>
                    <Menu.Item 
                    name='browse'
                    active={activeItem === 'browse'}
                    onClick={this.handleItemClick}
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

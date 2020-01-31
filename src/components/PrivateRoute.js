import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom'
import Adapter from '../services/Adapter'

export class PrivateRoute extends Component {
    render() {
        const {component: Component, ...rest} = this.props
        return (
             <Route {...rest} render={(props) => (
    Adapter.isAuthenticated() === true
    ? <Component {...props} />
    : <Redirect to={{
      pathname: '/',
      state: { from: props.location}
    }}/>
    )} />
        )
}
}

export default PrivateRoute;

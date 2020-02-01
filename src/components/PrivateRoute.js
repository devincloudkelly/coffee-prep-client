import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Adapter from '../services/Adapter'

const PrivateRoute = ({component: Component, ...rest}) => (
    // console.log('the private router is working...', Adapter.isAuthenticated().length>0)
     <Route {...rest} render={(props) => (
      Adapter.isAuthenticated().length > 0
      ? 
      <Component {...props} />
      : 
      <Redirect to={{
        pathname: '/',
        state: { from: props.location}
      }}/>
      )} />
)


export default PrivateRoute;

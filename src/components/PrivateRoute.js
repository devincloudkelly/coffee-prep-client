import React, { Component } from 'react';
import { Route, Redirect, withRouter} from 'react-router-dom'
// import { connect } from 'react-redux'
import Adapter from '../services/Adapter'


const PrivateRoute = ({component: Component, ...rest}) => {
    console.log('the private router is working...')
     return <Route {...rest} render={(props) => (
      Adapter.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location}
      }}/>
      )} />
     }  

// const mapStateToProps = state => {
//     return {
//         jwt: state.jwt
//     }
// }

export default withRouter(PrivateRoute);

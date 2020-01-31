import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HomeScreen from './containers/HomeScreen';
import Profile from './containers/Profile';
import NewPreparation from './containers/NewPreparation';
import ShowPreparation from './containers/ShowPreparation';
import Adapter from './services/Adapter'




const PrivateRoute = (props, {component: Component, ...rest}) => {
  return <Route {...rest} render={(props) => (
    Adapter.isAuthenticated() === true
    ? <Component {...props} />
    : <Redirect to='/'/>
    )} />
  }
  
  const token = localStorage.getItem('jwt')
// home screen and ShowPreparation is public
// everthing else private

function App() {
  return (
    <div >
      <Router>
        <Route exact path='/' component={HomeScreen} />

        <PrivateRoute path='/profile' component={Profile} />

        <PrivateRoute exact path='/preparations/new' component={NewPreparation} />

        <Route path='/preparations' component={ShowPreparation} />

      </Router>
      
      This is the App
    </div>
  );
}

const mapStateToProps = state => {
  return {
      user: state.user,
      jwt: state.jwt,
      loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(App);

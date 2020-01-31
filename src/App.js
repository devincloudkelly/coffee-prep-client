import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HomeScreen from './containers/HomeScreen';
import Profile from './containers/Profile';
import NewPreparation from './containers/NewPreparation';
import ShowPreparation from './containers/ShowPreparation';


const PrivateRoute = (props, {component: Component, ...rest}) => {
  console.log(props.jwt)
  return <Route {...rest} render={(props) => (
    props.jwt ?
    <Component {...props} />
    :
    <Redirect to='/'/>
  )} />
}

// home screen and ShowPreparation is public
// everthing else private

function App() {
  return (
    <div >
      <Router>
        <Route exact path='/' component={HomeScreen} />

        <PrivateRoute path='/profile' component={Profile} />

        <PrivateRoute exact path='/preparation/new' component={NewPreparation} />

        <Route path='/preparation' component={ShowPreparation} />

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

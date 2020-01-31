import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomeScreen from './containers/HomeScreen';
import Profile from './containers/Profile';
import NewPreparation from './containers/NewPreparation';
import ShowPreparation from './containers/ShowPreparation';
import Adapter from './services/Adapter'
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute'




// const PrivateRoute = (props, {component: Component, ...rest}) => {
//   console.log('the private router is working...')
//    return <Route {...rest} render={(props) => (
//     Adapter.isAuthenticated() === true
//     ? <Component {...props} />
//     : <Redirect to={{
//       pathname: '/',
//       state: { from: props.location}
//     }}/>
//     )} />
//    }
  
  const token = localStorage.getItem('jwt')
// home screen and ShowPreparation is public
// everthing else private

function App() {
  return (
    <div >
      <Router>
        <NavBar/>
        {/* <Switch> */}
          <Route exact path='/' render={(props) => <HomeScreen {...props} />} />
          <Route path='/preparations' component={ShowPreparation} />
          <PrivateRoute path='/profile' render={(props) => <Profile {...props}/>} />
          <PrivateRoute path='/preparations/new' component={NewPreparation} />
        {/* </Switch> */}
      </Router>
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

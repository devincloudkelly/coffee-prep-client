import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import HomeScreen from './containers/HomeScreen';
import Profile from './containers/Profile';
import NewPreparation from './containers/NewPreparation';
import ShowPreparation from './containers/ShowPreparation';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute'


// home screen and ShowPreparation is public
// everthing else private

function App() {
  return (

      <Router>
        <NavBar/>
        {/* This works with switch either on or off..need to investigate further when/why I'd want it or not */}
        <Switch>
          <Route exact path='/' render={(props) => <HomeScreen {...props} />} />
          <PrivateRoute exact path='/preparations/new' component={NewPreparation} />
          <Route path='/preparations/:id' component={ShowPreparation} />
          {/* Do not use routes as below, they do not work with Redux because they are 'blocked updates'. The component below is not a 'route component' */}
          {/* <PrivateRoute path='/profile' render={(props) => <Profile {...props}/>} /> */}
          <PrivateRoute path='/profile' component={Profile} />
          {/* The route below is a fallback for entering an incorrect pathname. If you're logged in it will push you back to your profile, or else it will kick you to login */}
          <PrivateRoute component={Profile}/>
        </Switch>
      </Router>

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

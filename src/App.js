import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
        {/* <Switch> */}
          <Route exact path='/' render={(props) => <HomeScreen {...props} />} />
          <Route path='/preparations' component={ShowPreparation} />
          {/* Do not use routes as below, they do not work with Redux because they are 'blocked updates'. The component below is not a 'route component' */}
          {/* <PrivateRoute path='/profile' render={(props) => <Profile {...props}/>} /> */}
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/preparations/new' component={NewPreparation} />
        {/* </Switch> */}
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

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './containers/HomeScreen';
import Profile from './containers/Profile';
import NewPreparation from './containers/NewPreparation';
import ShowPreparation from './containers/ShowPreparation';

function App() {
  return (
    <div >
      <Router>
        <Route exact path='/'>
          <HomeScreen/>
        </Route>
        <Route path='/profile'>
      <Profile/>
        </Route>
        <Route exact path='/preparation/new'>
      <NewPreparation/>
        </Route>
        <Route path='/preparation'>
      <ShowPreparation/>
        </Route>
      </Router>
      
      This is the App
    </div>
  );
}

export default App;

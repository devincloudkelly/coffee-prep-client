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
      {/* <Router>
        
      </Router> */}
      <HomeScreen/>
      <Profile/>
      <NewPreparation/>
      <ShowPreparation/>
      
      This is the App
    </div>
  );
}

export default App;

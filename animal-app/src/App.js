import React from 'react';
import HeaderComponent from './HeaderComponent'
// import HomeComponent from './HomeComponent'
import MainComponent from './MainComponent'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShelterList from './ShelterList';

function App() {
  return (
    <main>
      <HeaderComponent />
      {/* <Switch> */}
        <Route exact path="/" component={MainComponent} /> 
        {/* <Route exact path ='/shelters' componet={ShelterList} /> */}
        {/* <Route exact path='/home' component={HomeComponent} /> */}
        {/* <Route exact path='/login' component={Login} />
        <Route exact path='/dogs' component={DogContainer} />
        <Route component={My404} /> */} 
      {/* </Switch> */}
    </main>
  );
}

export default App;

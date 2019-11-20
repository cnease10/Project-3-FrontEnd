import React from 'react';
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import './App.css';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <main>
      <HeaderComponent />
      {/* <Switch> */}
        <Route exact path="/" component={MainComponent} /> 
        {/* <Route exact path='/login' component={Login} />
        <Route exact path='/dogs' component={DogContainer} />
        <Route component={My404} /> */} */}
      {/* </Switch> */}
    </main>
  );
}

export default App;

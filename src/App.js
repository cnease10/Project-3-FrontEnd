import React from 'react';
import MainComponent from './MainComponent'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import AdminLogin from './AdminLogin'



function App() {
  return (
    <main >
      <Switch>
        <Route exact path ='/' component={MainComponent} />
        <Route exact path='/letmein' component={AdminLogin} />
      </Switch>
    </main>
    )
}
export default App;


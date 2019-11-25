import React from 'react';
import MainComponent from './MainComponent'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import AdminLogin from './AdminLogin'
import Register from './Register'



function App() {
  return (
    <main >
      <Switch>
        <Route exact path ='/' component={MainComponent} />
        <Route exact path='/letmein' component={AdminLogin} />
        <Route exact path ='/register' component={Register} />
      </Switch>
    </main>
    )
}
export default App;


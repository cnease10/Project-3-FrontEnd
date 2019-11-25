import React, {Component} from 'react';
import MainComponent from './MainComponent'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import AdminLogin from './AdminLogin'
import Register from './Register'



class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  } 
  logIn = () => {
  this.setState({
    loggedIn: true
    })
  }
  render () {
    return (
      <main >
        <Switch>
          <Route exact path ='/' render={(props) => <MainComponent {...props} adminlogged={this.state.loggedIn}/>}/>
          <Route exact path='/letmein'  render={(props) => <AdminLogin {...props} logIn={this.logIn}/>}/>
          <Route exact path ='/register' component={Register} />
        </Switch>
      </main>
    )
  }
}
export default App;

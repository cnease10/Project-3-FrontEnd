import React from 'react';
// import HeaderComponent from './HeaderComponent'
// import HomeComponent from './HomeComponent'
import MainComponent from './MainComponent'
import './App.css';
// import FooterComponent from './FooterComponent';
import {Route, Switch} from 'react-router-dom';
// import ShelterList from './ShelterList';
// import ShelterShow from './ShelterShow'
import AdminLogin from './AdminLogin'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path ='/' component={MainComponent} />
        <Route exact path='/letmein' component={AdminLogin} />
      </Switch>
      
     
    </main>
  );
}

export default App;

// {/* <Switch>
//   <Route exact path="/" component={MainComponent} /> 
//   <Route exact path ='/sheltershow' render={(props) => <ShelterShow {...props} isAuthed={true} />}/>
//   {/* <Route exact path = '/shelters' component={ShelterList}/> */}
//   {/* <Route exact path='/home' component={HomeComponent} /> */}
//   {/* <Route exact path='/login' component={Login} />
//   <Route exact path='/dogs' component={DogContainer} />
//   <Route component={My404} /> */} 
// {/* </Switch> */} 
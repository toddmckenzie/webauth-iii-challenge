import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Users from './components/users';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={Users}/>
      <Route path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </div>
  )
}

export default App;

import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Users from './components/users';
import Login from './components/login';
import Register from './components/register';


function App() {
  return (
    <div className="App">
      <Route exact path='/' />
      <Route path='/users' component={Users}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default App;

import React from 'react';
import { router, link } from 'react-router-dom';
import './App.css';
import Users from './components/users';
import Login from './components/login';
import Register from './components/register';


function App() {
  return (
    <div className="App">
      <Route path='/users' component={Users}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Users}/>
    </div>
  );
}

export default App;

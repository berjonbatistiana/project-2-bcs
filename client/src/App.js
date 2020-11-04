import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './pages/common/components/Navbar';

import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';

import { Dashboard } from './pages/User'


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route exact path='/dashboard' component={Dashboard}/>
    </Router>
  );
}

export default App;

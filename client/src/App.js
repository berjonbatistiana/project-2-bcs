import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './pages/common/components/Navbar';
import { useSelector, useDispatch } from "react-redux";

// import word from './utils/GenerateWord';
import {
  WrappedSignUp,
  WrappedSignIn,
  About,
} from './pages/Viewer';

import { Dashboard } from './pages/User'
// const randomWord = word.generateWord(3, 5);


function App() {
  const { token } = useSelector((state) => state.viewer);
  return (
    <Router>
      <Navbar/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route exact path='/' component={token ? Dashboard : About}/>
    </Router>
  );
}

export default App;

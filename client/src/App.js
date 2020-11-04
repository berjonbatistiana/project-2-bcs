import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './pages/common/components/Navbar';
// import word from './utils/GenerateWord';
import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';

// const randomWord = word.generateWordRoutes(3, 5);


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route exact path="/">
        <h1>Welcome to the </h1>
      </Route>
    </Router>
  );
}

export default App;

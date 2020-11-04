import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./pages/common/components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Dashboard } from "./pages/User";
import { WrappedSignUp, WrappedSignIn, About } from "./pages/Viewer";

function App() {
  const { token } = useSelector((state) => state.viewer);
  return (
    <Router>
      <Navbar />
      <Route path="/signup" component={WrappedSignUp} />
      <Route path="/signin" component={WrappedSignIn} />
      <Route exact path="/" component={token ? Dashboard : About} />
    </Router>
  );
}

export default App;

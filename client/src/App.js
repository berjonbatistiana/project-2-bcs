import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./pages/common/components/Navbar";
import { useSelector } from "react-redux";
import { Dashboard } from "./pages/User";
import { WrappedSignUp, WrappedSignIn, About } from "./pages/Viewer";
import { Challenge } from "./pages/common/components/Challenge";

function App() {
  const { token } = useSelector((state) => state.viewer);
  return (
    <Router>
      <Navbar />
      <Route path="/signup" component={WrappedSignUp} />
      <Route path="/signin" component={WrappedSignIn} />
      <Route path="/challenge" component={Challenge} />
      <Route exact path="/" component={token ? Dashboard : About} />
    </Router>
  );
}

export default App;

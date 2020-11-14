import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { Navbar, UserNavbar } from "./pages/common/components";
import { useSelector } from "react-redux";
import {
  About,
  Leaderboard,
  WrappedSignIn,
  WrappedSignUp,
} from "./pages/Viewer";

function App() {
  const { token } = useSelector((state) => state.viewer);
  return (
    <Router>
      {!token ? <Navbar /> : <UserNavbar />}
      <Route path="/signup" component={WrappedSignUp} />
      <Route path="/signin" component={WrappedSignIn} />
      <Route
        exact
        path="/challenge"
        render={!token ? () => <Redirect to="/signin" /> : ""}
      />
      <Route path="/leaderboard" component={!token ? Leaderboard : ""} />
      <Route exact path="/" component={!token ? About : ""} />
    </Router>
  );
}

export default App;

import React from "react";
import {HashRouter as Router, Redirect, Route} from "react-router-dom";
import {Navbar, UserNavbar} from "./pages/common/components";
import {useSelector} from "react-redux";
import {About, Leaderboard, TypingChallenge, WrappedSignIn, WrappedSignUp,} from "./pages/Viewer";
import {TypingArena} from "./pages/Viewer/ViewerViews/TypingArena";
import {Dashboard} from "./pages/User/UserViews";
import {makeStyles} from "@material-ui/core/styles";


function routes(token, styles) {

  return (
    <main className={styles}>
      <Route
        exact
        path="/"
        component={token ? Dashboard : About}/>
      <Route path="/signup" component={WrappedSignUp}/>
      <Route path="/signin" component={WrappedSignIn}/>
      <Route
        exact
        path="/challenge"
        component={token ? TypingChallenge : ""}/>
      <Route
        exact
        path="/arena"
        component={token ? TypingArena : ""}/>
      <Route
        exact
        path="/leaderboard"
        component={token ? Leaderboard : ""}/>
      <Route
        exact
        path="/signin"
        render={token ? () => <Redirect to="/"/> : ""}
      />
      <Route
        exact
        path="/signup"
        render={token ? () => <Redirect to="/"/> : ""}
      />
    </main>
  );

}

function App() {
  const {token} = useSelector((state) => state.viewer);
  const useStyles = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }))
  const classes = useStyles();

  return (
    <Router>
      {!token ?
        [<Navbar/>,
          routes(token, '')]
        :
        <UserNavbar routes={routes(token, classes.content)}/>
      }
    </Router>
  );
}

export default App;

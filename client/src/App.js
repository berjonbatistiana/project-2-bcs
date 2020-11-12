import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Navbar from "./pages/common/components/Navbar";
import {useSelector} from "react-redux";
import {Dashboard} from "./pages/User";
import {About, Leaderboard, WrappedSignIn, WrappedSignUp, TypingChallenge } from "./pages/Viewer";

function App() {
    const {token} = useSelector((state) => state.viewer);
    return (
        <Router>
            <Navbar/>
            <Route path="/signup" component={WrappedSignUp}/>
            <Route path="/signin" component={WrappedSignIn}/>
            <Route exact path='/challenge' render={token ? TypingChallenge : () => <Redirect to="/signin" />}/>
            <Route path="/leaderboard" component={Leaderboard}/>
            <Route exact path="/" component={token ? Dashboard : About}/>
        </Router>
    );
}

export default App;

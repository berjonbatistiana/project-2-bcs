import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import logo from '../components/HypeTypeLogoInverted.v0.png';
import { useSelector, useDispatch } from "react-redux";
import { setViewerToken } from "../../Viewer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  colorNav: {
    backgroundColor: "#302E2E",
  },
}));

export function Navbar() {
  const classes = useStyles();
  const { token } = useSelector((state) => state.viewer);
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setViewerToken(null));
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.colorNav} position="static" elevation={0}>
        <Toolbar>
          {token ? (
            <Toolbar>
              <Button
                color="inherit"
                to="/"
                component={Link}
                className={classes.title}
              >
                Dashboard
              </Button>
              <Button component={Link} to="/challenge" color="inherit">
                Typing Challenge
              </Button>
            </Toolbar>
          ) : (
            <Button
              className={classes.menuButton}
              component={Link}
              to="/"
              color="inherit"
            >
              <img src={logo} alt="HypeTypeLogo" style={{height:30}}/>
            </Button>
          )}
          <Typography variant="h6" className={classes.title}>
            <Button component={Link} to="/" color="inherit">
              Hype Type
            </Button>
          </Typography>

          {token ? (
            <Toolbar>
              <Typography variant="button" className={classes.title}>
                Hello, {user}!
              </Typography>
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            </Toolbar>
          ) : (
            <div>
              <Button component={Link} to="/leaderboard" color="inherit">
              Leaderboard
            </Button>
              <Button to="/signup" component={Link} color="inherit">
                Sign Up
              </Button>
              <Button to="/signin" component={Link} color="inherit">
                Sign In
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

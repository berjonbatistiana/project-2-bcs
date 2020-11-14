import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core/";
import { connect } from "react-redux";
import { compose } from "redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { setViewerToken } from "../ViewerReducer";
import { accentColor, SignCard, TextFieldInput } from "../../common/components";
import signUp from "../../common/components/signUp.svg";

class SignUp extends Component {
  state = {
    snackbar: false,
  };

  handleSignUp = async (formValues, dispatch) => {
    try {
      const res = await axios.post("/auth/signup", formValues);
      localStorage.setItem("token", res.data);
      localStorage.setItem("user", formValues.username);
      this.props.setViewerToken(res.data);
      this.props.history.push("/challenge");
    } catch (e) {
      this.setState({ snackbar: true });
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ snackbar: false });
  };

  render() {
    const { handleSubmit, pristine, form } = this.props;
    let disable = () =>
      !pristine &&
      form.values &&
      form.values.username &&
      form.values.password &&
      form.values.username !== "" &&
      form.values.password !== ""
        ? false
        : true;
    return (
      <SignCard
        title="Sign Up"
        image={signUp}
        question="Already have an account? "
        linkTitle="Sign In"
        link="signin"
        content={
          <form noValidate autoComplete="off">
            <Grid item container spacing={3}>
              <Grid item xs={12}>
                <Field
                  name="username"
                  label="Username"
                  component={TextFieldInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  label="Password"
                  component={TextFieldInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={disable()}
                  onClick={handleSubmit(this.handleSignUp)}
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: accentColor,
                    borderRadius: 25,
                    "&:hover": {
                      backgroundColor: "#0276aa",
                    },
                  }}
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={this.state.snackbar}
              onClose={this.handleClose}
            >
              <MuiAlert onClose={this.handleClose} severity="error">
                The username you have entered is not available.
              </MuiAlert>
            </Snackbar>
          </form>
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return { superman: state.viewer, form: state.form.signUpForm };
}

export const WrappedSignUp = compose(
  reduxForm({ form: "signUpForm" }),
  connect(mapStateToProps, { setViewerToken })
)(SignUp);

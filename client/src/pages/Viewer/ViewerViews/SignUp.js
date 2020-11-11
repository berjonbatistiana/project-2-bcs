import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core/";
import { connect } from "react-redux";
import { compose } from "redux";

import { setViewerToken } from "../ViewerReducer";
import {accentColor, SignCard, TextFieldInput} from "../../common/components";
import signUp from "../../common/components/signUp.svg"


class SignUp extends Component {
  handleSignUp = async (formValues, dispatch) => {
    try {
      const res = await axios.post("/auth/signup", formValues);
      localStorage.setItem("token", res.data);
      localStorage.setItem("user", formValues.username);
      this.props.setViewerToken(res.data);
      this.props.history.push("/");
    } catch (e) {
      const $errorComponent = document.getElementById("on-error");
      $errorComponent.innerHTML = "";
      $errorComponent.append(
        "Error signing up. Username may already be taken. Please make sure you have entered a username and a password"
      );
    }
  };

  render() {
    const { handleSubmit } = this.props;
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
                  onClick={handleSubmit(this.handleSignUp)}
                  variant="contained"
                  style={{color: "white",
                    backgroundColor: accentColor,
                    borderRadius: 25,
                    '&:hover': {
                      backgroundColor: "#0276aa",
                    }}}
                >
                  Sign up
                </Button>
              </Grid>
              <div style={{ color: "red" }} id="on-error"></div>
            </Grid>
          </form>
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return { superman: state.viewer };
}

export const WrappedSignUp = compose(
  reduxForm({ form: "signUpForm" }),
  connect(mapStateToProps, { setViewerToken })
)(SignUp);

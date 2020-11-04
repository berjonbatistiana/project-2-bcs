import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { SignUpCard, TextFieldInput } from "../../common/components";
import { Grid } from "@material-ui/core/";

import { connect } from "react-redux";
import { compose } from "redux";
import { setViewerToken } from "../ViewerReducer";
import { setUser } from "../../User/UserReducer";

class SignUp extends Component {
  handleSignUp = async (formValues, dispatch) => {
    try {
      const res = await axios.post("/auth/signup", formValues);
      localStorage.setItem("token", res.data);
      this.props.setViewerToken(res.data);
      dispatch(setUser(formValues.username));
      this.props.history.push("/");
    } catch (e) {
      throw new Error(e);
    }
  };

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item>
          <SignUpCard
            title="Sign Up"
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
                      color="primary"
                    >
                      Sign up
                    </Button>
                  </Grid>
                </Grid>
              </form>
            }
          />
        </Grid>
      </Grid>
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

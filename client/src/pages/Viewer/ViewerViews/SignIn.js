import React from "react";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { setViewerToken } from "../ViewerReducer";
import { setUser } from "../../User/UserReducer";

import { SignCard, TextFieldInput } from "../../common/components";
import { Grid } from "@material-ui/core/";

const SignIn = (props) => {
  const { handleSubmit, history } = props;
  const handleSignIn = async (formValues, dispatch) => {
    try {
      const res = await axios.post("/auth/signin", formValues);
      localStorage.setItem("token", res.data);
      dispatch(setViewerToken(res.data));
      dispatch(setUser(formValues.username));
      history.push("/");
    } catch (e) {
      const $errorComponent = document.getElementById("on-error");
      $errorComponent.append("Invalid credentials");
    }
  };

  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>
        <SignCard
          title="Sign In"
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
                    onClick={handleSubmit(handleSignIn)}
                    variant="contained"
                    color="primary"
                  >
                    Sign in
                  </Button>
                </Grid>
                <p style={{ color: "red" }} id="on-error"></p>
              </Grid>
            </form>
          }
        />
      </Grid>
    </Grid>
  );
};

export const WrappedSignIn = reduxForm({ form: "signInForm" })(SignIn);

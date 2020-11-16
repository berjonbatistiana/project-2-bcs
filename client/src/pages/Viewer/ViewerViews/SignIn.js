import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core/";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";
import { setViewerToken } from "../ViewerReducer";
import { accentColor, SignCard, TextFieldInput } from "../../common/components";
import signIn from "../../common/components/signIn.svg";
import {postSignIn} from "../../../utils";

const SignIn = (props) => {
  const form = useSelector((state) => state.form.signInForm);
  const [snackbar, setSnackbar] = useState(false);
  const { handleSubmit, pristine, history } = props;
  let disable = () =>
    !(!pristine &&
      form.values &&
      form.values.username &&
      form.values.password &&
      form.values.username !== "" &&
      form.values.password !== "");

  const handleSignIn = async (formValues, dispatch) => {
    try {
      const res = await postSignIn(formValues);
      localStorage.setItem("token", res.data);
      localStorage.setItem("user", formValues.username);
      dispatch(setViewerToken(res.data));
      history.push("/");
    } catch (e) {
      setSnackbar(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  return (
    <SignCard
      title="Sign In"
      image={signIn}
      question="Don't have an account? "
      linkTitle="Sign Up"
      link="signup"
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
                onClick={handleSubmit(handleSignIn)}
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: disable()? 'lightgray' : accentColor,
                  borderRadius: 25,
                  "&:hover": {
                    backgroundColor: "#0276aa",
                  },
                }}
              >
                Sign in
              </Button>
            </Grid>
          </Grid>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={snackbar}
            onClose={handleClose}
          >
            <MuiAlert onClose={handleClose} severity="error">
              We couldn’t find an account matching the username and password you
              entered. Please check your username and password and try again.
            </MuiAlert>
          </Snackbar>
        </form>
      }
    />
  );
};

export const WrappedSignIn = reduxForm({ form: "signInForm" })(SignIn);

import React from "react";
import { reduxForm, Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { setViewerToken } from "../ViewerReducer";
import { setUser } from "../../User/UserReducer";

const TextFieldInput = ({ input, meta, label }) => {
  return <TextField {...input} label={label} />;
};

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
      throw new Error(e);
    }
  };

  return (
    <form noValidate autoComplete="off">
      <Field name="username" label="username" component={TextFieldInput} />
      <Field name="password" label="password" component={TextFieldInput} />
      <Button
        onClick={handleSubmit(handleSignIn)}
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
    </form>
  );
};

export const WrappedSignIn = reduxForm({ form: "signInForm" })(SignIn);

import React, { useEffect, useState } from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "./modules/components/Typography";
import AppForm from "./modules/views/AppForm";
import { email, required } from "./modules/form/validation";
import RFTextField from "./modules/form/RFTextField";
import FormButton from "./modules/form/FormButton";
import Alert from "@mui/material/Alert";
import FormFeedback from "./modules/form/FormFeedback";
import withRoot from "./modules/withRoot";
import { useDispatch, useSelector } from "react-redux";
import { signinUsers } from "../Actions/UserActions";
import { Error } from "../Pages/AlertComponent";

function SignIn() {
  const [sent, setSent] = useState(false);
  const signinState = useSelector((state) => state.signinUsersReducer);
  const { error } = signinState;

  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = required(["email", "password"], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = (formData, values) => {
    setSent(true);
    dispatch(signinUsers(formData));
    setTimeout(() => {
      setSent(false);
      values.reset();
    }, 2000);
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {"Not a member yet? "}
            <Link href="/signup" align="center" underline="always">
              Sign Up here
            </Link>
            {error && (
              <Error
                error={<Alert severity="error">invalid Credentials</Alert>}
              />
            )}
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 1 }}
            >
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? "In progress…" : "Sign In"}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignIn);
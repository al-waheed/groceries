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


{/* <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-lg">
  <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
    Get started today
  </h1>

  <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
    sunt dolores deleniti inventore quaerat mollitia?
  </p>

  <form
    action=""
    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
  >
    <p className="text-center text-lg font-medium">
      Sign in to your account
    </p>

    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>

      <div className="relative">
        <input
          type="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>

      <div className="relative">
        <input
          type="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <button
      type="submit"
      className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
    >
      Sign in
    </button>

    <p className="text-center text-sm text-gray-500">
      No account?
      <Link className="underline" href="">
        Sign up
      </Link>
    </p>
  </form>
</div>
</div> */}
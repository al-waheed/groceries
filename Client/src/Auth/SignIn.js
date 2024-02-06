import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppLogo } from "../Util/AppLogo";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { signinUsers } from "../Actions/UserActions";
import { Error } from "../Pages/AlertComponent";
import Alert from "@mui/material/Alert";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const signinState = useSelector((state) => state.signinUsersReducer);
  const { error } = signinState;
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
	console.log(formData)
  };

  const handleSubmit = (e) => {
	e.preventDefault();
    setIsSubmitting(true);
    dispatch(signinUsers(formData));
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        email: "",
        password: "",
      });
    }, 3000);
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <div className="mx-auto mt-4 text-center">
            <Link to="/">
              <AppLogo />
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>
            {error && (
              <Error
                error={<Alert severity="error">invalid Credentials</Alert>}
              />
            )}
            <div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  onChange={handleChange}
                  disabled={isSubmitting}
                  value={formData.password}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
                <span
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                >
                  {showPassword ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="text-gray-400 text-[16px]"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-gray-400 text-[16px]"
                    />
                  )}
                </span>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`block w-full rounded-lg text-sm px-5 py-3 font-medium text-white ${
                isSubmitting
                  ? "bg-[#fdecec] text-[#966E6E] pointer-events-none"
                  : "bg-[#F54748]"
              }`}
            >
              {isSubmitting ? "In Progress..." : "Sign in"}
            </button>
            <p className="text-center text-sm text-gray-500">
              No account?
              <Link className="underline" to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

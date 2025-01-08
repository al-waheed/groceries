import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppLogo } from "../Util/AppLogo";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { signupUsers } from "../Actions/UserActions";
import { Success, Error } from "../Pages/AlertComponent";
import Alert from "@mui/material/Alert";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const signupState = useSelector((state) => state.signupUsersReducer);
  const { error, loading, success } = signupState;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/signin";
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUsers(formData));
    if (success) {
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });
    }
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
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
              Create new account
            </p>
            {success && (
              <Success
                success={
                  <Alert severity="success">Successfully Registered</Alert>
                }
              />
            )}
            {error && (
              <Error
                error={<Alert severity="error">Email Already Exists</Alert>}
              />
            )}
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter fullname"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={formData.email}
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
              className={`block w-full rounded-lg text-sm px-5 py-3 font-medium text-white ${
                loading
                  ? "bg-[#fdecec] text-[#966E6E] pointer-events-none"
                  : "bg-[#F54748]"
              }`}
            >
              {loading ? "In Progress..." : "Sign up"}
            </button>
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link className="underline" to="/signin">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

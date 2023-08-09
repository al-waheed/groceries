import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { MainTextStyle, SmallHeaderStyle, SmallTextStyle } from "../Util/Style";

export default function SignIn() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-white">
        <h1 className="text-[#F55253] font-bold pt-8 pl-10">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="text-4xl" />
          </Link>
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-[505px] h-[757px] rounded-xl shadow-md border-[0.5px] border-[#878787]">
            <div className="pl-10 mt-3">
              <SmallHeaderStyle
                style={{
                  fontWeight: "300",
                  marginBottom: "8px",
                }}
              >
                Welcome !
              </SmallHeaderStyle>
              <MainTextStyle
                style={{
                  fontSize: "40px",
                  fontWeight: "500",
                  marginBottom: "13px",
                }}
              >
                Sign In
              </MainTextStyle>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Formik
                initialValues={{
                  email: "",
                  userName: "",
                  password: "",
                  confirmPassword: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form>
                  <label htmlFor="email">
                    <SmallTextStyle style={{ color: "black" }}>
                      Email
                    </SmallTextStyle>
                  </label>
                  <div>
                    <Field
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      className="w-[423px] h-[59px] rounded-md bg-white border-[0.6px] border-[#282828] pl-5 mb-5"
                    />
                  </div>

                  <label htmlFor="User name">
                    <SmallTextStyle style={{ color: "black" }}>
                      User name
                    </SmallTextStyle>
                  </label>
                  <div>
                    <Field
                      id="userName"
                      name="userName"
                      placeholder="Enter your user name"
                      className="w-[423px] h-[59px] rounded-md bg-white border-[0.6px] border-[#282828] pl-5 mb-5"
                    />
                  </div>

                  <label htmlFor="Password">
                    <SmallTextStyle style={{ color: "black" }}>
                      Password
                    </SmallTextStyle>
                  </label>
                  <div>
                    <Field
                      id="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="w-[423px] h-[59px] rounded-md bg-white border-[0.6px] border-[#282828] pl-5 mb-5"
                    />
                  </div>

                  <label htmlFor="Confirm Password">
                    <SmallTextStyle style={{ color: "black" }}>
                      Confirm Password
                    </SmallTextStyle>
                  </label>
                  <div>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confrim your Password"
                      className="w-[423px] h-[59px] rounded-md bg-white border-[0.6px] border-[#282828] pl-5 mb-5"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-[423px] h-[59px] rounded-md bg-[#F55253] text-base text-white mb-3"
                    >
                      Register
                    </button>
                    <SmallTextStyle
                      style={{ fontWeight: "300", textAlign: "center" }}
                    >
                      Already have an Account ?     
                      <span style={{ fontWeight: "700", color: "#F55253" }}>
                        <Link to="/signup">  Sign In</Link>
                      </span>
                    </SmallTextStyle>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div>
            <img
              src="/images/Delivery-bro.png"
              alt="signUp_pic"
              className="w-[721px] h-[721px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

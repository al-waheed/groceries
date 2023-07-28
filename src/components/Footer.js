import React from "react";
import { Link } from "react-router-dom";
import { TextStyle, SmallHeaderStyle, SmallTextStyle } from "./Util/Style";

export default function Footer() {
  return (
    <>
      <div className="pt-24 px-28">
        <div className="flex justify-between items-start">
          <div className="mr-44">
            <h1 className="text-[#F55253] text-[28px] font-bold mb-6">
              <Link to="/">
                <img src="/images/logo.png" alt="logo" className="text-4xl" />
              </Link>
            </h1>
            <TextStyle
              style={{ fontSize: "16px", lineHeight: "26px", width: "266px" }}
            >
              Fast delivery, which is active all over the world, serves with
              many transportation vehicles.
            </TextStyle>
          </div>
          <div>
            <SmallHeaderStyle
              style={{
                fontSize: "18px",
                lineHeight: "20px",
                marginBottom: "30px",
              }}
            >
              Company
            </SmallHeaderStyle>
            <SmallTextStyle>About Us</SmallTextStyle>
            <SmallTextStyle>Blog</SmallTextStyle>
            <SmallTextStyle>All Products</SmallTextStyle>
            <SmallTextStyle>Locations Map</SmallTextStyle>
          </div>
          <div>
            <SmallHeaderStyle
              style={{
                fontSize: "18px",
                lineHeight: "20px",
                marginBottom: "30px",
              }}
            >
              Services
            </SmallHeaderStyle>
            <SmallTextStyle>Order tracking</SmallTextStyle>
            <SmallTextStyle> Wish List</SmallTextStyle>
            <SmallTextStyle> My account</SmallTextStyle>
            <SmallTextStyle>Terms & Conditions</SmallTextStyle>
          </div>
          <div>
            <SmallHeaderStyle
              style={{
                fontSize: "18px",
                lineHeight: "20px",
                marginBottom: "30px",
              }}
            >
              Get in Touch
            </SmallHeaderStyle>
            <TextStyle
              style={{
                fontSize: "16px",
                lineHeight: "26px",
                width: "191px",
                color: "#888888",
              }}
            >
              Subscribe to our weekly Newsletter and receive updates via email.
            </TextStyle>
          </div>
        </div>
        <div className="mt-20">
          <hr />
          <div className="flex justify-between items-center py-4">
            <SmallTextStyle style={{ color: "#8C8C8C", lineHeight: "24px" }}>
              All Rights Reserved @MORENIKEJI 2023
            </SmallTextStyle>
            <div className="flex">
              <SmallTextStyle
                style={{
                  color: "#747474",
                  fontSize: "14px",
                  marginRight: "20px",
                }}
              >
                Terms & Conditions
              </SmallTextStyle>
              <SmallTextStyle style={{ color: "#747474", fontSize: "14px" }}>
                Privacy & Policy
              </SmallTextStyle>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

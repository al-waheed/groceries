import React from "react";
import { SmallHeaderStyle, TextStyle } from "../Util/Style";
import { ShippingIcon, SecureIcon, ReturnIcon } from "../Util/AppLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export default function Service() {
  return (
    <>
      <div className="flex justify-between bg-white h-28 rounded-lg px-7 m-16">
        <div className="flex items-center">
          <div className="pt-10">
            <ShippingIcon />
          </div>
          <div className="ml-[-10px]">
            <SmallHeaderStyle style={{ fontSize: "16px" }}>
              Free shipping
            </SmallHeaderStyle>
            <TextStyle
              style={{
                fontSize: "13px",
                lineHeight: "25px",
              }}
            >
              Shipping's on Us 100%
            </TextStyle>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-5">
            <FontAwesomeIcon
              icon={faAward}
              style={{ fontSize: "45px", color: "#F54748" }}
            />
          </div>
          <div>
            <SmallHeaderStyle style={{ fontSize: "16px" }}>
              Affordable Prices
            </SmallHeaderStyle>
            <TextStyle
              style={{
                fontSize: "13px",
                lineHeight: "25px",
              }}
            >
              Budget-Friendly Excellence.
            </TextStyle>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pt-10">
            <SecureIcon />
          </div>
          <div className="ml-[-10px]">
            <SmallHeaderStyle style={{ fontSize: "16px" }}>
              Secure checkout
            </SmallHeaderStyle>
            <TextStyle
              style={{
                fontSize: "13px",
                lineHeight: "25px",
              }}
            >
              Checkout with Confidence
            </TextStyle>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pt-10">
            <ReturnIcon />
          </div>
          <div className="ml-[-10px]">
            <SmallHeaderStyle style={{ fontSize: "16px" }}>
              15 days returns
            </SmallHeaderStyle>
            <TextStyle
              style={{
                fontSize: "13px",
                lineHeight: "25px",
              }}
            >
              Few Days return, No Regrets.
            </TextStyle>
          </div>
        </div>
      </div>
    </>
  );
}

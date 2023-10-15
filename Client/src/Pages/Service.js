import React from "react";
import { SmallHeaderStyle, TextStyle } from "../Util/Style";
import { ShippingIcon, SecureIcon, ReturnIcon } from "../Util/AppLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export default function Service() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:m-16 lg:gap-8 bg-white rounded-lg px-7 m-4">
        <div className="flex items-center h-32">
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
        <div className="flex items-center h-32">
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
        <div className="flex items-center h-32">
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
        <div className="flex items-center h-32">
          <div className="pt-10">
            <ReturnIcon />
          </div>
          <div className="ml-[-10px]">
            <SmallHeaderStyle style={{ fontSize: "16px" }}>
              5 days returns
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

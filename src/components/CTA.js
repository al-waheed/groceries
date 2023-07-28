import React from "react";
import {
  TextHeaderStyle,
  TextStyle,
  ButtonStyle,
  ButtonTextStyle,
  SubHeaderStyle,
} from "./Util/Style.js";

export default function CTA() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center bg-[#FEF5F5] h-[760px] py-[100px] px-52">
          <div className="w-[664px] h-auto" style={{ flex: "0 0 50%" }}>
            <img
              src="/images/mobile mockup.png"
              alt="img"
              className="max-w-[none]"
            />
          </div>
          <div>
            <SubHeaderStyle
              style={{
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Download our app
            </SubHeaderStyle>
            <TextHeaderStyle style={{ width: "466px", marginBottom: "22px" }}>
              Get the Groceries app order more easily.
            </TextHeaderStyle>
            <TextStyle style={{ width: "466px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </TextStyle>
            <div className="flex mt-[50px]">
              <ButtonStyle
                style={{
                  background: "transparent",
                  border: "1.5px solid #EEDCDC",
                  marginRight: "28px",
                  width: "208px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <img src="/images/iphone.png" alt="maker_logo" />
                </div>
                <ButtonTextStyle style={{ color: "#2E2E2E" }}>
                  App Store
                </ButtonTextStyle>
              </ButtonStyle>
              <ButtonStyle
                style={{
                  background: "transparent",
                  border: "1.5px solid #EEDCDC",
                  width: "208px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <img src="/images/android.png" alt="maker_logo" />
                </div>
                <ButtonTextStyle style={{ color: "#2E2E2E" }}>
                  Play Store
                </ButtonTextStyle>
              </ButtonStyle>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

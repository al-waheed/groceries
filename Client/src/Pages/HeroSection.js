import React from "react";
import {
  MainTextStyle,
  TextStyle,
  ButtonStyle,
  SubHeaderStyle,
} from "../Util/Style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-center items-center py-8 px-10 h-[85vh]">
        <div>
          <div className="flex items-center justify-center bg-[#FDECEC] w-[214px] h-[46px] rounded-[23px]">
            <SubHeaderStyle style={{ fontSize: "16px" }}>
              More than Faster
            </SubHeaderStyle>
            <img
              src="/images/image.png"
              alt="icon"
              style={{ width: "50px", marginTop: "15px" }}
            />
          </div>
          <MainTextStyle style={{ width: "570px", margin: "20px 0" }}>
            Groceries delivered in as little as
            <span style={{ color: "#F54748", fontWeight: "500" }}> 2 hours</span>
          </MainTextStyle>
          <TextStyle style={{ width: "478px" }}>
            Grocen atssures fresh grocery every morning to your family without
            getting out in this pandemic.
          </TextStyle>
          <div className="flex mt-[60px]">
            <ButtonStyle style={{ marginRight: "20px" }}>
              <Link to="/signup">Order Now</Link>
            </ButtonStyle>
            <ButtonStyle
              style={{
                background: "transparent",
                width: "240px",
                display: "flex",
                color: "#363636",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-[#363636] text-[50px]"
              />
              Order Process
            </ButtonStyle>
          </div>
        </div>
        <div className="w-[619px] h-auto" style={{ flex: "0 0 50%" }}>
          <img
            src="/images/Header-Image.png"
            alt="img"
            className="max-w-[none]"
          />
        </div>
      </div>
    </>
  );
}

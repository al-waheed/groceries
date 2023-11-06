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
    <div className="flex flex-col lg:flex-row justify-center items-center h-[88vh] py-8 px-4 lg:px-16 bg-white">
      <div className="lg:w-1/2">
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
        <MainTextStyle style={{ maxWidth: "570px", margin: "20px 0" }}>
          Groceries delivered in as little as
          <span style={{ color: "#F54748", fontWeight: "500" }}>
            {" "}
            2 hours
          </span>
        </MainTextStyle>
        <TextStyle style={{ maxWidth: "478px" }}>
          Experience the convenience of having a bountiful supply of fresh groceries delivered to your doorstep
        </TextStyle>
        <div className="flex mt-6 lg:mt-12">
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
            <Link to="/allproducts">See All Grocery</Link>
          </ButtonStyle>
        </div>
      </div>
      <div className="lg:w-1/2 w-[700px]" >
        <img
          src="/images/Header-Image.png"
          alt="img"
          className="h-full max-w-[none]"
        />
      </div>
    </div>
  );
}

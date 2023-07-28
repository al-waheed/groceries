import React from "react";
import {
  SubHeaderStyle,
  TextHeaderStyle,
  SmallHeaderStyle,
  TextStyle,
} from "./Util/Style";

export default function Service() {
  return (
    <>
      <div className="bg-[#FEF5F5] h-[760px] py-[100px] px-52">
        <div className="text-center mb-20">
          <SubHeaderStyle style={{ marginBottom: "8px" }}>
            What we Serve
          </SubHeaderStyle>
          <TextHeaderStyle style={{ width: "627px", margin: "auto" }}>
            fruit and vegetable delivered to your home
          </TextHeaderStyle>
        </div>
        <div className="flex justify-between">
          <div
            className=" flex flex-col justify-center items-center w-[300px] 
		  h-[310px] bg-white rounded-xl"
          >
            <img src="/images/icon.png" alt="service_icon" />
            <SmallHeaderStyle>Free shipping</SmallHeaderStyle>
            <TextStyle
              style={{
                fontSize: "14px",
                lineHeight: "25px",
                width: "243px",
                textAlign: "center",
                marginTop: "14px",
              }}
            >
              Enjoy Order in a hand using the fresness of groceries
            </TextStyle>
          </div>
          <div className="relative">
		  <div className="bg-[#FE6A6A] rounded-xl w-[310px] h-[334px] rotate-[-3deg]"></div>
            <div
              className=" flex flex-col justify-center items-center w-[300px] 
			h-[310px] bg-white rounded-xl absolute top-[46.5%] -translate-y-1/2"
            >
              <img src="/images/Group 1737.png" alt="service_icon" />
              <SmallHeaderStyle>15 days returns</SmallHeaderStyle>
              <TextStyle
                style={{
                  fontSize: "14px",
                  lineHeight: "25px",
                  width: "243px",
                  textAlign: "center",
                  marginTop: "14px",
                }}
              >
                Order in a handy way using the freshness of the groceries.
              </TextStyle>
            </div>
          </div>
          <div
            className=" flex flex-col justify-center items-center w-[300px] 
			h-[310px] bg-white rounded-xl"
          >
            <img src="/images/Group 1736.png" alt="service_icon" />
            <SmallHeaderStyle>Secure checkout</SmallHeaderStyle>
            <TextStyle
              style={{
                fontSize: "14px",
                lineHeight: "25px",
                width: "243px",
                textAlign: "center",
                marginTop: "14px",
              }}
            >
              If you get rotten items - return immediately to us.
            </TextStyle>
          </div>
        </div>
      </div>
    </>
  );
}

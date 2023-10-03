import React from "react";
import {
  TextHeaderStyle,
  TextStyle,
  ButtonStyle,
  SubHeaderStyle,
} from "../Util/Style.js";

export default function Feature() {
  return (
    <>
      <div
        className="flex justify-between items-center
           mx-16 my-10 bg-[#F54748] p-5 rounded-lg"
      >
        <div className="flex items-center py-10 px-6 bg-white rounded-lg">
          <div>
            <img
              src="/images/imageandcard.png"
              alt="img"
              className="w-[300px]"
            />
          </div>
          <div>
            <SubHeaderStyle
              style={{
                marginBottom: "7px",
                color: "#03A66B",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              WHY CHOOSE US
            </SubHeaderStyle>
            <TextHeaderStyle
              style={{ width: "300px", fontSize: "22px", lineHeight: "28px" }}
            >
              Find Favorites and Discover New Ones
            </TextHeaderStyle>
            <TextStyle
              style={{
                width: "300px",
                margin: "12px 0",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Spot your favorites and indulge in the 
              thrill of uncovering new delights.
            </TextStyle>
            <ButtonStyle
              style={{ fontSize: "13px", width: "120px", height: "40px" }}
            >
              Explore Now
            </ButtonStyle>
          </div>
        </div>
        <div className="flex items-center py-10 px-6 bg-white rounded-lg">
          <div>
            <img src="/images/image&card.png" alt="img" className="w-[260px]" />
          </div>
          <div>
            <SubHeaderStyle
              style={{
                marginBottom: "7px",
                color: "#F54748",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              HOME DELIVERY
            </SubHeaderStyle>
            <TextHeaderStyle
              style={{ width: "300px", fontSize: "22px", lineHeight: "28px" }}
            >
              Sit at Home We Will Take Care Your Order
            </TextHeaderStyle>
            <TextStyle
              style={{
                width: "300px",
                margin: "10px 0",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Feel relax, sit at home we've got your orders covered.
            </TextStyle>
            <ButtonStyle
              style={{ fontSize: "13px", width: "120px", height: "40px" }}
            >
              Keep Shopping
            </ButtonStyle>
          </div>
        </div>
      </div>
    </>
  );
}

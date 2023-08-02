import React, { useState } from "react";
import {
  SmallButtonStyle,
  SubHeaderStyle,
  SmallHeaderStyle,
} from "../Util/Style";

export default function Items({ items }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  return (
    <>
      <div
        className=" flex flex-col justify-between w-[300px] 
	      h-[440px] bg-white rounded-xl p-5 mb-8 hover:shadow-lg"
      >
        <div>
          <SmallButtonStyle>{items.category}</SmallButtonStyle>
        </div>
        <div className="w-[150px] h-[170px] mx-auto ">
          <img
            src={items.images}
            alt="item_img"
            className="w-[150px] object-contain aspect-[3/4]"
          />
        </div>
        <SubHeaderStyle style={{ fontWeight: "600" }}>
          {items.name}
        </SubHeaderStyle>
        <div className="flex justify-between items-center">
          <div>
            <SmallHeaderStyle
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "#676767",
                marginBottom: "10px",
              }}
            >
              Varients
            </SmallHeaderStyle>
            <select
              value={varient}
              onChange={(e) => {
                setVarient(e.target.value);
              }}
              className="rounded-md text-[15px] w-[110px] text-[#F54748] 
			            outline-none h-7 border-[1.5px] border-[#F54748] px-1"
            >
              {items.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div>
            <SmallHeaderStyle
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                color: "#676767",
                marginBottom: "10px",
              }}
            >
              Quantity
            </SmallHeaderStyle>
            <select
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="rounded-md text-[15px] text-[#F54748] w-[110px] 
			            outline-none h-7 border-[1.5px] border-[#F54748] px-1"
            >
              {[...Array(10).keys()].map((x, i) => {
                return (<option value={i + 1}>{i + 1}</option>);
              })}
            </select>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <SmallHeaderStyle style={{ fontSize: "17px", color: "#F54748" }}>
            ₦{items.prices[0][varient] * quantity}
          </SmallHeaderStyle>
          <SmallButtonStyle style={{ fontSize: "14px" }}>
            ADD TO CART
          </SmallButtonStyle>
        </div>
      </div>
    </>
  );
}

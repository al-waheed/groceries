import React, { useState } from "react";
import {
  SubHeaderStyle,
  SmallHeaderStyle,
  CategoryButtonStyle,
  //   TextStyle,
  SmallButtonStyle,
} from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/CartActions";
// import Tooltip from "@mui/material/Tooltip";


export default function Items({ items }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  //   const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addToCart(items, quantity, varient));
  };

  return (
    <>
      <div
        className="flex flex-col justify-between w-[250px] 
	      h-[400px] bg-white rounded-xl p-3"
      >
        <div >
          <CategoryButtonStyle>{items.category}</CategoryButtonStyle>
        </div>
        <div className="w-[150px] h-[170px] mx-auto flex items-start">
          <img
            src={items.images}
            alt="item_img"
            className="w-[150px] object-contain aspect-[3/4]"
          />
          <div>
            {/* <FontAwesomeIcon
              icon={faHeart}
              className="text-[#606061] ml-4 text-[20px] cursor-pointer hover:text-[#313133]"
              onClick={handleOpen}
            />
            <Tooltip title="Click to view item features">
              <FontAwesomeIcon
                icon={faEye}
                className="text-[#606061] ml-4 text-[20px] my-7 cursor-pointer hover:text-[#313133]"
                onClick={handleOpen}
              /> */}
            {/* </Tooltip> */}
          </div>
        </div>
        <SubHeaderStyle
          style={{
            fontSize: "15px",
            fontWeight: "400",
            color: "#313133",
          }}
        >
          {items.name}
        </SubHeaderStyle>
        <div className="flex justify-between items-center">
          <div>
            <SmallHeaderStyle
              style={{
                fontSize: "12px",
                fontWeight: "300",
                color: "#313133",
                marginBottom: "5px",
              }}
            >
              Varients
            </SmallHeaderStyle>
            <select
              value={varient}
              onChange={(e) => {
                setVarient(e.target.value);
              }}
              className="rounded-md text-[12px] w-[80px] text-[#F54748] capitalize
			            outline-none h-7 border-[1.5px] border-[#FEF5F5] px-1"
            >
              {items.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div>
            <SmallHeaderStyle
              style={{
                fontSize: "12px",
                fontWeight: "300",
                color: "#313133",
                marginBottom: "5px",
              }}
            >
              Quantity
            </SmallHeaderStyle>
            <select
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="rounded-md text-[12px] text-[#F54748] w-[60px] 
			            outline-none h-7 border-[1.5px] border-[#FEF5F5] px-1"
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <hr style={{ marginBottom: "-10px" }} />
        <div className="flex justify-between items-center">
          <SmallHeaderStyle style={{ fontSize: "15px", color: "#313133" }}>
            ₦{(items.prices[0][varient] * quantity).toFixed(2)}
          </SmallHeaderStyle>
          <div className="flex items-center justify-between">
            <SmallButtonStyle onClick={addtocart}>
              <FontAwesomeIcon icon={faCartPlus} className="mr-1"/>
			   Add
            </SmallButtonStyle>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SmallHeaderStyle,
  CategoryButtonStyle,
  SmallButtonStyle,
} from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
    <div>
      <div className="bg-white rounded-lg">
        <Link to="#" className="group relative block overflow-hidden">
          <span>
            <CategoryButtonStyle>{items.category}</CategoryButtonStyle>
          </span>
          <FontAwesomeIcon
            icon={faHeart}
            className="h-4 w-4 absolute end-2 top-4 z-10 rounded-full bg-[#F54748] p-1.5
                   text-white transition hover:text-gray-900/75"
          />
          <img
            src={items.images}
            alt="item_img"
            className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-56"
          />
          <div className="relative p-2">
            <h3 className="text-[16px] font-medium text-gray-900">
              {items.name}
            </h3>
            <div className="flex justify-between items-center my-4">
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
			            outline-none h-8 border-[#FEF5F5] p-1"
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
			            outline-none h-8 border-[#FEF5F5] p-1"
                >
                  {[...Array(10).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
              </div>
            </div>
            <hr style={{ marginBottom: "10px" }} />
            <span className="flex items-center justify-between">
              <SmallHeaderStyle style={{ fontSize: "15px", color: "#313133" }}>
                ₦{(items.prices[0][varient] * quantity).toFixed(2)}
              </SmallHeaderStyle>
              <SmallButtonStyle
                onClick={addtocart}
                className="transition hover:scale-105"
              >
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                Add
              </SmallButtonStyle>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

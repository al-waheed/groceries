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
        <div>
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
        <hr style={{ marginBottom: "-5px" }} />
        <div className="flex justify-between items-center">
          <SmallHeaderStyle style={{ fontSize: "15px", color: "#313133" }}>
            ₦{(items.prices[0][varient] * quantity).toFixed(2)}
          </SmallHeaderStyle>
          <div className="flex items-center justify-between">
            <SmallButtonStyle onClick={addtocart}>
              <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
              Add
            </SmallButtonStyle>
          </div>
        </div>
      </div>
    </>
  );
}

{/* <a href="#" className="group relative block overflow-hidden">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            New
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

          <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

          <form className="mt-4">
            <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
              Add to Cart
            </button>
          </form>
        </div>
      </a>
    </div> */}

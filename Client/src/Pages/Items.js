import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SmallHeaderStyle,
  CategoryButtonStyle,
  SmallButtonStyle,
} from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/CartActions";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "3px",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
};

export default function Items({ items }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addToCart(items, quantity, varient));
  };

  return (
    <div>
      <div className="bg-white rounded-lg">
        <Link className="group relative block overflow-hidden">
          <span>
            <CategoryButtonStyle>{items.category}</CategoryButtonStyle>
          </span>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={addtocart}
            className="h-4 w-4 absolute end-2 top-4 z-10 rounded-full bg-[#F54748] p-1.5
                   text-white transition hover:text-gray-900/75"
          />
          <img
            src={items.images}
            onClick={handleOpen}
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
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <div className="grid w-full grid-cols-1 items-center gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-md sm:col-span-4 lg:col-span-5">
                <img
                  src={items.images}
                  alt={items.imageAlt}
                  className="object-cover h-full w-full object-center"
                />
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  {items.name}
                </h2>
                <section className="mt-2">
                  <p className="text-xl text-gray-900">
                    ₦{(items.prices[0][varient] * quantity).toFixed(2)}
                  </p>
                  <ul className="mt-6">
                    <h4 className="text-sm mb-1 font-medium text-gray-900">
                      Feature
                    </h4>
                    {items.features.map((feature) => (
                      <li
                        className="text-sm mb-1 text-gray-600"
                        key={feature._id}
                      >
                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="mt-10">
                  <div className="flex justify-between items-center my-4">
                    <div>
                      <SmallHeaderStyle
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "#F54748",
                          marginBottom: "7px",
                        }}
                      >
                        Varients
                      </SmallHeaderStyle>
                      <select
                        value={varient}
                        onChange={(e) => {
                          setVarient(e.target.value);
                        }}
                        className="rounded-md text-[12px] w-[80px] cursor-pointer
                        border-gray-200 border-2 p-1 capitalize outline-none text-gray-900"
                      >
                        {items.varients.map((varient) => {
                          return <option value={varient}>{varient}</option>;
                        })}
                      </select>
                    </div>
                    <div>
                      <SmallHeaderStyle
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "#F54748",
                          marginBottom: "7px",
                        }}
                      >
                        Quantity
                      </SmallHeaderStyle>
                      <select
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                        className="rounded-md text-[12px] w-[80px] cursor-pointer
                        border-gray-200 border-2 p-1 capitalize outline-none text-gray-900"
                      >
                        {[...Array(10).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={addtocart}
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#F54748] px-8 py-3 text-base font-medium text-white hover:bg-[#F54748] focus:outline-none focus:ring-2 focus:ring-[#F54748] focus:ring-offset-2"
                  >
                    Add To Cart
                  </button>
                </section>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

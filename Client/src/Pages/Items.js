import React, { useState } from "react";
import {
  SubHeaderStyle,
  SmallHeaderStyle,
  CategoryButtonStyle,
  TextStyle,
} from "../Util/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/CartActions";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,
  bgcolor: "#fff",
  borderRadius: 1,
  border: "2px solid #FDECEC",
  boxShadow: 24,
  p: 3,
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
    <>
      <div
        className="flex flex-col justify-between w-[250px] 
	      h-[400px] bg-white rounded-xl p-3 mb-5"
      >
        <div className="flex items-center justify-between">
          <CategoryButtonStyle>{items.category}</CategoryButtonStyle>
        </div>
        <div className="w-[150px] h-[170px] mx-auto flex items-start">
          <img
            src={items.images}
            alt="item_img"
            className="w-[150px] object-contain aspect-[3/4]"
          />
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-[#606061] ml-4 text-[20px] cursor-pointer hover:text-[#313133]"
              onClick={handleOpen}
            />
            <Tooltip title="Click to view item features">
              <FontAwesomeIcon
                icon={faEye}
                className="text-[#606061] ml-4 text-[20px] my-7 cursor-pointer hover:text-[#313133]"
                onClick={handleOpen}
              />
            </Tooltip>
            <Tooltip title="Add item to cart">
              <FontAwesomeIcon
                icon={faCartPlus}
                className="text-[#606061] ml-4 text-[20px] cursor-pointer hover:text-[#313133]"
                onClick={addtocart}
              />
            </Tooltip>
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
              className="rounded-md text-[12px] w-[110px] text-[#F54748] capitalize
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
              className="rounded-md text-[12px] text-[#F54748] w-[110px] 
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
          <SmallHeaderStyle style={{ fontSize: "16px", color: "#F54748" }}>
            <s> -25% </s>
          </SmallHeaderStyle>
        </div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} className="outline-none">
            <SubHeaderStyle
              style={{
                fontWeight: "600",
                fontSize: "20px",
                marginBottom: "15px",
              }}
            >
              {items.name}
            </SubHeaderStyle>
            <div className="w-[250px] h-[200px] mx-auto">
              <img
                src={items.images}
                alt="item_img"
                className="w-[250px] h-[200px] object-contain"
              />
            </div>
            <div className="mt-6">
              {items.features.map((feature) => {
                return (
                  <p className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#F54748] text-[20px] mr-2"
                    />
                    <TextStyle style={{ fontSize: "16px" }}>
                      {feature}.
                    </TextStyle>
                  </p>
                );
              })}
            </div>
            <div className="text-right pt-3">
              <hr className="mb-5 bg-[#F54748]" />
              <img src="/images/Star.png" alt="rating_img" className="w-16" />
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

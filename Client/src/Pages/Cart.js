import React from "react";
import {
  TextHeaderStyle,
  SmallHeaderStyle,
  SmallTextStyle,
  SubHeaderStyle,
} from "../Util/Style";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { addToCart, deleteCartItems, clearCart } from "../Actions/CartActions";
import CheckOut from "./CheckOut";

export default function Cart() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="h-[200px] w-screen mb-32">
          <img
            src="/images/BannerandImage.png"
            alt="cart_img"
            className="h-200px"
          />
        </div>
        <div className="text-center">
            <TextHeaderStyle>My Shopping Cart</TextHeaderStyle>
          </div>
        {cartItems.length ? (
          <div className="flex items-start justify-evenly py-16 px-10">
            <TableContainer
              component={Paper}
              style={{ width: 872, border: "#E6E6E6", borderRadius: "8px" }}
            >
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "#808080" }}>PRODUCT</TableCell>
                    <TableCell style={{ color: "#808080" }} align="right">
                      PRICE
                    </TableCell>
                    <TableCell style={{ color: "#808080" }} align="right">
                      QUANTITY
                    </TableCell>
                    <TableCell style={{ color: "#808080" }} align="right">
                      SUBTOTAL
                    </TableCell>
                    <TableCell style={{ color: "#808080" }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id} className="h-24">
                      <TableCell component="th" scope="row">
                        <div className="flex items-center">
                          <img
                            src={item.images}
                            alt="img"
                            width={100}
                            height={100}
                            className="object-contain aspect-[2]"
                          />
                          <h3 className="ml-4">
                            {item.name} [{item.varients}]
                          </h3>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        ₦{item.prices[0][item.varients]}
                      </TableCell>
                      <TableCell align="right">
                        <div className="flex items-center justify-between cursor-pointer p-2 border-[1px] border-[#F2F2F2] rounded-[43px]">
                          <div
                            className="w-[34px] h-[34px] bg-[#F2F2F2] rounded-full flex items-center 
						  justify-center"
                            onClick={() => {
                              dispatch(
                                addToCart(
                                  item,
                                  item.quantity - 1,
                                  item.varients
                                )
                              );
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faMinus}
                              style={{ color: "#1a1a1a", fontSize: "14px" }}
                            />
                          </div>

                          {item.quantity}

                          <div
                            className="w-[34px] h-[34px] bg-[#F2F2F2] rounded-full flex items-center 
						  justify-center"
                            onClick={() => {
                              dispatch(
                                addToCart(
                                  item,
                                  item.quantity + 1,
                                  item.varients
                                )
                              );
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              style={{ color: "#1a1a1a", fontSize: "14px" }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        ₦{item.price.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          style={{ color: "#F54748", fontSize: "18px", cursor:'pointer' }}
                          onClick={() => {
                            dispatch(deleteCartItems(item));
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableCell>
                    <button
                      className="px-8 py-3.5 bg-[#F2F2F2] text-[16px] text-[#4D4D4D]
		                rounded-[43px]"
                      onClick={() => {
                        dispatch(clearCart());
                      }}
                    >
                      Clear cart
                    </button>
                  </TableCell>
                </TableBody>
              </Table>
            </TableContainer>
            <div
              className="flex flex-col justify-between w-[400px] rounded-lg 
              border-[1px] border-[#E6E6E6] p-4 bg-white"
            >
              <SmallHeaderStyle style={{ fontSize: "20px", fontWeight: "500" }}>
                Cart Total
              </SmallHeaderStyle>
              <div className="flex items-center justify-between py-2">
                <SmallTextStyle style={{ fontSize: "14px" }}>
                  Subtotal:
                </SmallTextStyle>
                <SmallTextStyle style={{ fontSize: "14px", color: "#1A1A1A" }}>
                  ₦{subTotal.toFixed(2)}
                </SmallTextStyle>
              </div>
              <hr />
              <div className="flex items-center justify-between py-2">
                <SmallTextStyle style={{ fontSize: "14px" }}>
                  Shipping:
                </SmallTextStyle>
                <SmallTextStyle
                  style={{
                    fontSize: "14px",
                    color: "#1A1A1A",
                    fontWeight: "500",
                  }}
                >
                  Free
                </SmallTextStyle>
              </div>
              <hr />
              <div className="flex items-center justify-between py-2">
                <SmallTextStyle> Total:</SmallTextStyle>
                <SmallTextStyle style={{ color: "#1A1A1A", fontWeight: "500" }}>
                  ₦{subTotal.toFixed(2)}
                </SmallTextStyle>
              </div>
              <CheckOut subTotal={subTotal} />
            </div>
          </div>
        ) : (
          <SubHeaderStyle style={{ textAlign: "center", margin: "100px 0" }}>
            Your Cart is Empty
          </SubHeaderStyle>
        )}
      </div>
    </>
  );
}

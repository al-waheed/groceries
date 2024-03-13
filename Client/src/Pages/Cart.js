import React from "react";
import {
  SubHeaderStyle,
} from "../Util/Style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCartItems, clearCart } from "../Actions/CartActions";
import CheckOut from "./CheckOut";

export default function Cart1() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useDispatch();
  return (
    <>
      <div className="h-[200px] w-screen sm:mb-[200px]">
        <img
          src="/images/BannerandImage.png"
          alt="cart_img"
          className="h-200px"
        />
      </div>
      <div className="container mx-auto mt-10">
        {cartItems.length ? (
          <div className="sm:flex my-10">
            <div className="w-full  shadow-md bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {cartItems.length} Items
                </h2>
              </div>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="md:flex items-stretch py-8 md:py-4 lg:py-4 border-t border-gray-50"
                >
                  <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <img
                      src={item.images}
                      alt="Product_image"
                      className="h-full object-center object-cover md:block hidden"
                    />
                    <img
                      src={item.images}
                      alt="Product_image"
                      className="md:hidden w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-base font-black leading-none text-gray-800">
                        {item.name}
                      </p>
                      <div className="flex items-center">
                        <button
                          className="border rounded-md py-1 px-3 mr-2"
                          onClick={() => {
                            dispatch(
                              addToCart(item, item.quantity - 1, item.varients)
                            );
                          }}
                        >
                          -
                        </button>
                        <span className="text-center w-8">{item.quantity}</span>
                        <button
                          className="border rounded-md py-1 px-3 ml-2"
                          onClick={() => {
                            dispatch(
                              addToCart(item, item.quantity + 1, item.varients)
                            );
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      Varients: [{item.varients}]
                    </p>
                    <p className="text-xs leading-3 text-gray-600 py-4">
                      Price:{" "}
                      <span className="text-[#F54748]">
                        ₦{item.prices[0][item.varients]}
                      </span>
                    </p>
                    <p className="w-96 text-xs leading-3 text-gray-600">
                      {item.features.slice(0, 1).map((feature) => (
                        <p
                          className="text-xs mb-1 text-gray-600"
                          key={feature._id}
                        >
                          Feature: {feature}
                        </p>
                      ))}
                    </p>
                    <div className="flex items-center justify-between pt-5">
                      <div className="flex items-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                          Add to favorites
                        </p>
                        <p
                          className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                          onClick={() => {
                            dispatch(deleteCartItems(item));
                          }}
                        >
                          Remove
                        </p>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800">
                        ₦{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-10">
                <Link
                  to="/"
                  className="flex items-center font-semibold text-[#F54748] text-sm"
                >
                  <svg
                    className="fill-current mr-2 text-[#F54748] w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
                <button
                  className="px-5 py-3 bg-[#F2F2F2] font-semibold text-sm text-[#F54748] rounded-full"
                  onClick={() => {
                    dispatch(clearCart());
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div className="w-full  bg-[#edb3b3] shadow-md md:w-1/2 px-8 py-10 h-2/4">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cartItems.length}
                </span>
                <span className="font-semibold text-sm">
                  ₦{subTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Tax {cartItems.length}
                </span>
                <span className="font-semibold text-sm">Free</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - ₦450.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span> ₦{(subTotal + 450).toFixed(2)}</span>
                </div>
                <CheckOut subTotal={subTotal} />
              </div>
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

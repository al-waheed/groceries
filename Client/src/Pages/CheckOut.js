import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../Actions/OrderAction";

export default function CheckOut({ subTotal }) {
  const dispatch = useDispatch();

  const isToken = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  }

  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51IG4hAB84gCmikSTmQdGGWuJEesi7JzVUhiYOFELqO3HEo5N10vkcaMoiBrkSJc4kWkz3rb3ouwPkt7hDseRLiVS00rBDNug8o"
        amount={Math.round(subTotal * 100)}
        shippingAddress
        token={isToken}
        currency="NGN"
        description="GROCERY ITEMS"
      >
        <button
          className="w-full px-10 py-3.5 bg-[#F54748] text-[16px]
		   text-white rounded-[43px]"
        >
          Proceed to checkout
        </button>
      </StripeCheckout>
    </div>
  );
}

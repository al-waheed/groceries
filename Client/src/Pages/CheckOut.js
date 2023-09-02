import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../Actions/OrderAction";
import Alert from "@mui/material/Alert";
import { Loading, Error, Success } from '../Pages/AlertComponent'
import ThankYou from "./ThankYou";

export default function CheckOut({ subTotal }) {
  const [showOrder, setShowOrder] = useState(false);
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const onToken = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
    setShowOrder(true);
  };

  return (
    <div>
      {loading && <Loading />}
      {success && (
        <Success
          success={
            <Alert severity="success">Your Orders Placed Successfully</Alert>
          }
        />
      )}
      {error && (
        <Error error={<Alert severity="error">Something went wrong</Alert>} />
      )}
      {!showOrder ? (
        <StripeCheckout
          stripeKey="pk_test_51IG4hAB84gCmikSTmQdGGWuJEesi7JzVUhiYOFELqO3HEo5N10vkcaMoiBrkSJc4kWkz3rb3ouwPkt7hDseRLiVS00rBDNug8o"
          amount={Math.round(subTotal * 100)}
          shippingAddress
          billingAddress
          token={onToken}
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
      ) : (
        <ThankYou />
      )}
    </div>
  );
}

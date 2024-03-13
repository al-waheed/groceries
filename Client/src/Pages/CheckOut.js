import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../Actions/OrderAction";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Loading, Error, Success } from "../Pages/AlertComponent";
import ThankYou from "./ThankYou";

export default function CheckOut({ subTotal }) {
  const [showOrder, setShowOrder] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const onToken = (token) => {
    dispatch(placeOrder(token, subTotal));
    setShowOrder(true);
  };

  useEffect(() => {
    const isUserSignedIn = !!localStorage.getItem("currentUser");
    if (!isUserSignedIn && !showOrder) {
      navigate("/signin");
    }
  }, [showOrder, navigate]);

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
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          amount={Math.round((subTotal + 450) * 100)}
          shippingAddress
          billingAddress
          token={onToken}
          currency="NGN"
          description="GROCERY ITEMS"
        >
          <button
            className="w-full py-3 bg-[#F54748] hover:bg-[#f02e2e] text-sm
		   text-white font-semibold"
          >
            <FontAwesomeIcon icon={faBagShopping} fade className="mr-3" /> CHECKOUT
          </button>
        </StripeCheckout>
      ) : (
        <ThankYou />
      )}
    </div>
  );
}

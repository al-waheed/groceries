import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Actions/CartActions";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

export default function ThankYou() {
  const [open, setOpen] = useState(true);
  const userState = useSelector((state) => state.signinUsersReducer);
  const orderState = useSelector((state) => state.getUserOrdersReducers);
  const { orders } = orderState;
  const order = orders.map((order) => order.transactionId);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  const handleModalClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearCart());
      handleModalClose();
      window.location.href = '/'
    }, 15000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      <Modal open={open} onClose={handleModalClose}>
        <div className="rounded-3xl w-[70%] m-auto shadow-2xl bg-white">
          <div className="p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest">
              Your order is on the way
            </p>
            <p className="mt-4 text-sm font-medium tracking-widest">
              Hi {currentUser.fullName} your Package with{" "}
              <b className="text-[#F54748]">{order[0]}</b> will be deliver in
              the next 3days. We will appreciate your feedback on delivery
              experience{" "}
              <a className="text-[#F54748]" href="mailto:orders@grocery.com">
                grover@yourdomain.com
              </a>
              .
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Thanks for your purchase.
            </h2>
            <Link
              className="mt-8 inline-block w-full rounded-full bg-[#F54748] py-4 text-sm 
            font-bold text-white shadow-xl"
              to="/orders"
            >
              Track Order
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

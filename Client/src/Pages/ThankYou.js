import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Actions/CartActions";
import { FireWorks } from "../Util/FireWorks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ThankYou() {
  const [open, setOpen] = useState(true);
  const userState = useSelector((state) => state.signinUsersReducer);
  const orderstate = useSelector((state) => state.getUserOrdersReducers);
  const { orders } = orderstate;
  const order = orders.map((order) => order.transactionId);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearCart());
      handleClose();
      FireWorks();
    }, 15000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hi {currentUser.firstName} {currentUser.lastName},
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
              Package with <b>{order}</b> will be deliver in the next 3days.
            </p>
            <p>
              We will appreciate your feedback on Delivery Experience
              <a className="" href="mailto:orders@grocery.com">
                groceryorder@gmailcom
              </a>
            </p>
            <h2>Thank you for you order</h2>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

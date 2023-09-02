import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../Actions/CartActions";
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
  const [open, setOpen] = useState(true); // Initially open
  const dispatch = useDispatch();

  // Function to close the modal
  const handleClose = () => setOpen(false);

  // Effect to close the modal after a delay (e.g., 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearCart()); // Clear the cart (you may need to adjust this logic)
      handleClose(); // Close the modal
    }, 5000); // Adjust the delay as needed (e.g., 5000 milliseconds = 5 seconds)
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
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
            Thank you so much for your order!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>We really appreciate it. </p>
            <p>
              Enjoy <b>10%</b> off your next purchase with this coupon code:
              <b>THANKYOU.</b>
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

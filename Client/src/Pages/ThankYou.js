import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Actions/CartActions";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

export default function ThankYou () {
  const [open, setOpen] = useState(false);
  const userState = useSelector((state) => state.signinUsersReducer);
  const orderState = useSelector((state) => state.getUserOrdersReducers);
  const { orders } = orderState;
  const order = orders.map((order) => order.transactionId);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearCart());
      handleClose();
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
      <div className="rounded-3xl w-[70%] m-auto shadow-2xl bg-white">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Your order is on the way
          </p>
          <p className="mt-4 text-sm font-medium tracking-widest">
            Hi {currentUser.firstName} {currentUser.lastName}, your Package with{" "}
            <b className="text-[#F54748]">{order[0]}</b> will be deliver in the
            next 3days. We will appreciate your feedback on delivery experience{" "}
            <a className="text-[#F54748]" href="mailto:orders@grocery.com">
              groverorder@grover.com
            </a>.
          </p>
          <h2 className="mt-4 text-3xl font-bold">Thanks for your purchase.</h2>
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




// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../Actions/CartActions";
// import { FireWorks } from "../Util/FireWorks";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function ThankYou() {
//   const [open, setOpen] = useState(false);
//   const userState = useSelector((state) => state.signinUsersReducer);
//   const orderstate = useSelector((state) => state.getUserOrdersReducers);
//   const { orders } = orderstate;
//   const order = orders.map((order) => order.transactionId);
//   const { currentUser } = userState;
//   const dispatch = useDispatch();

//   const handleClose = () => setOpen(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       dispatch(clearCart());
//       handleClose();
//       FireWorks()
//     }, 15000);
//     return () => clearTimeout(timer);
//   }, [dispatch]);

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Hi {currentUser.firstName} {currentUser.lastName},
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <p>
//               Package with <b>{order}</b> will be deliver in the next 3days.
//             </p>
//             <p>
//               We will appreciate your feedback on Delivery Experience
//               <a className="" href="mailto:orders@grocery.com">
//                 groceryorder@gmailcom
//               </a>
//             </p>
//             <h2>Thank you for you order</h2>
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
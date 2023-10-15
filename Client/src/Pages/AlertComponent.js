import React from "react";
import Stack from "@mui/material/Stack";
import Styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = Styled.div`
  border:15px solid #f3f3f3;
  border-top:15px solid #F54748;
  width: 100px;
  height: 100px;
  margin-bottom: 100px;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;

export const Loading = () => {
  return (
    <div className="flex justify-center">
      <Loader />
    </div>
  );
};

export const Error = ({ error }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {error}
    </Stack>
  );
};

export const Success = ({ success }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {success}
    </Stack>
  );
};

// export const Alert = () => {
//   return (
//     <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
//     <div className="flex items-start gap-4">
//       <span className="text-green-600">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="h-6 w-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//       </span>
  
//       <div className="flex-1">
//         <strong className="block font-medium text-gray-900"> Changes saved </strong>
  
//         <p className="mt-1 text-sm text-gray-700">
//           Your product changes have been saved.
//         </p>
//       </div>
  
//       <button className="text-gray-500 transition hover:text-gray-600">
//         <span className="sr-only">Dismiss popup</span>
  
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="h-6 w-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//     </div>
//   </div>
//   );
// };

// // import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';

// export default function PositionedSnackbar() {
//   const [state, setState] = React.useState({
//     open: false,
//     vertical: 'top',
//     horizontal: 'center',
//   });
//   const { vertical, horizontal, open } = state;

//   const handleClick = (newState) => () => {
//     setState({ ...newState, open: true });
//   };

//   const handleClose = () => {
//     setState({ ...state, open: false });
//   };

//   const buttons = (
//     <React.Fragment>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
//           Top-Center
//         </Button>
//       </Box>
//       <Grid container justifyContent="center">
//         <Grid item xs={6}>
//           <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
//             Top-Left
//           </Button>
//         </Grid>
//         <Grid item xs={6} textAlign="right">
//           <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
//             Top-Right
//           </Button>
//         </Grid>
//         <Grid item xs={6}>
//           <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
//             Bottom-Left
//           </Button>
//         </Grid>
//         <Grid item xs={6} textAlign="right">
//           <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
//             Bottom-Right
//           </Button>
//         </Grid>
//       </Grid>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
//           Bottom-Center
//         </Button>
//       </Box>
//     </React.Fragment>
//   );

//   return (
//     <Box sx={{ width: 500 }}>
//       {buttons}
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         onClose={handleClose}
//         message="I love snacks"
//         key={vertical + horizontal}
//       />
//     </Box>
//   );
// }


// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// export default function CustomizedSnackbars() {
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <Stack spacing={2} sx={{ width: '100%' }}>
//       <Button variant="outlined" onClick={handleClick}>
//         Open success snackbar
//       </Button>
//       <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
//           Top-Center
//         </Button>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//           This is a success message!
//         </Alert>
//       </Snackbar>
//       <Alert severity="error">This is an error message!</Alert>
//       <Alert severity="warning">This is a warning message!</Alert>
//       <Alert severity="info">This is an information message!</Alert>
//       <Alert severity="success">This is a success message!</Alert>
//     </Stack>
//   );
// }


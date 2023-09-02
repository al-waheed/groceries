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

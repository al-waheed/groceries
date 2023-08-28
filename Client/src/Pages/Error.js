import * as React from "react";
import Stack from "@mui/material/Stack";

export default function Error({ error }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {error}

      {/* <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </Stack>
  );
}

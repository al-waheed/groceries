import * as React from "react";
import Stack from "@mui/material/Stack";

export default function Success({ success }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {success}
    </Stack>
  );
}

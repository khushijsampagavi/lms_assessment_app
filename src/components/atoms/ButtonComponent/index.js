import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonComponent({
  label = "",
  onclickButton,
  color = "",
}) {
  return (
    <Button variant="contained" onClick={onclickButton}>
      {label}
    </Button>
  );
}

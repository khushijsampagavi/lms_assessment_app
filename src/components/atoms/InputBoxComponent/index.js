import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputBoxComponent({label = "", type="", onInputChange, name=""}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" type={type} label={label} name={name} variant="outlined" onChange={onInputChange}/>
    </Box>
  );
}
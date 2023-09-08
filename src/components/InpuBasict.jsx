import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        sx={{ width: 500, padding: "16px 0px" }}
      />
    </Box>
  );
}

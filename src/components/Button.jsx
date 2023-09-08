import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons(props) {
  const calculated = () => {
    console.log("click");
  };
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        size="small"
        sx={{ width: "500px", padding: "16px 0px", marginTop: "10px" }}
        onClick={calculated}
      >
        {props.label}
      </Button>
    </Stack>
  );
}

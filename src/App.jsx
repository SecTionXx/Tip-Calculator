import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

const BasicButtons = (props) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        size="small"
        sx={{ width: "500px", padding: "16px 0px", marginTop: "10px" }}
        onClick={props.onClick}
      >
        {props.label}
      </Button>
    </Stack>
  );
};

const BasicTextFields = (props) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        value={props.value}
        label={props.label}
        onChange={props.onChange}
        variant="outlined"
        sx={{ width: 500, padding: "16px 0px" }}
      />
    </Box>
  );
};

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
  };

  const handleTipPercentageChange = (event) => {
    setTipPercentage(event.target.value);
  };

  const handleOnclick = () => {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = Number(billAmount) + Number(tipAmount);
    setTotal(totalAmount);
    console.log(`Tip amount is = ${tipAmount}`);
    console.log(totalAmount);
  };

  const formattedTotal = Number(total).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <body className="flex flex-col justify-center items-center">
        <content className="w-[500px] box-border m-10">
          <h1 className="p-4">Tip Calculator</h1>
          <p className="p-4">
            Enter the bill amount and tip percentage to calculate the total.
          </p>
          <BasicTextFields
            label="Bill amount"
            value={billAmount}
            onChange={handleBillAmountChange}
          />
          <BasicTextFields
            label="Tip percentage"
            value={tipPercentage}
            onChange={handleTipPercentageChange}
          />
          <BasicButtons
            label="Calculated"
            className="w-[500px]"
            onClick={handleOnclick}
          />
          <p className="p-12 text-[24px] ">Total : {formattedTotal}</p>
        </content>
      </body>
    </>
  );
}

export default App;

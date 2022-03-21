import CardForm from "./CardForm/CardForm";
import { Box, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import RequestModal from './RequestModal/RequestModal';

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [month, setCardMonth] = useState("");
  const [year, setCardYear] = useState("");
  const [cvv, setCardCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [correct, setCorrect] = useState(true);
  const [open, setOpen] = useState(false);
  const [cardRequest, setCardRequest] = useState('');

  useEffect(() => {
    if (
      cardNumber.length === 16 &&
      month.length === 2 &&
      year.length === 4 &&
      cvv.length === 3
    ) {
      setCorrect(false);
    }
  }, [cardNumber, month, year, cvv]);

  const maxSize = (value, size) => {
    return (value = Math.max(0, parseInt(value)).toString().slice(0, size));
  };

  const handleAdd = async () => {
    const res = await fetch("http://localhost:5000/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CardNumber: cardNumber,
        ExpData: `${month}/${year}`,
        CVV: cvv,
        Amount: amount,
      }),
    });
    const json = await res.json();
    setCardRequest(json);
    setOpen(true);
    setCorrect(true);
    setCardNumber("");
    setAmount("");
    setCardCvv("");
    setCardMonth("");
    setCardYear("");
  };

  return (
    <Box className="main">
      {open && <RequestModal open={open} setOpen={setOpen} cardRequest={cardRequest} />}
      <CardForm
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        month={month}
        setCardMonth={setCardMonth}
        year={year}
        setCardYear={setCardYear}
        cvv={cvv}
        setCardCvv={setCardCvv}
      />
      <TextField
        type={"number"}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="amount"
        label="Amount"
        onInput={(e) => {
          e.target.value = maxSize(e.target.value, 16);
        }}
      />
      <Button variant="contained" disabled={correct} onClick={handleAdd}>
        Оплатить
      </Button>
    </Box>
  );
}

export default App;

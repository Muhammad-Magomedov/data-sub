import { Card, Typography, Box } from "@mui/material";
import style from "./style.module.css";
import React from "react";
import chip from "../../img/chip.svg";
import CardNumbers from "../CardNumbers/CardNumbers";

function CardForm({
  cardNumber,
  setCardNumber,
  month,
  setCardMonth,
  year,
  setCardYear,
  cvv,
  setCardCvv,
}) {
  return (
    <Card className={style.card}>
      <Box className={style.info}>
        <Typography className={style.title}>MEGABANK</Typography>
        <img className={style.chip} src={chip} alt="" />
        <CardNumbers
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          month={month}
          setCardMonth={setCardMonth}
          year={year}
          setCardYear={setCardYear}
          cvv={cvv}
          setCardCvv={setCardCvv}
        />
      </Box>
    </Card>
  );
}

export default CardForm;

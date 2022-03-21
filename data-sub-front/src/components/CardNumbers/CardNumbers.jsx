import * as React from "react";
import Box from "@mui/material/Box";
import CustomInput from "../../CustomComponents/CustonInput";
import style from "./style.module.css";

function CardNumbers({
  cardNumber,
  setCardNumber,
  month,
  setCardMonth,
  year,
  setCardYear,
  cvv,
  setCardCvv,
}) {
  const maxSize = (value, size, max) => {
    return (value = Math.max(0, parseInt(value)).toString().slice(0, size));
  };

  const handleMonth = (value) => {
    if(value <= 12) setCardMonth(value)
    else setCardMonth('')
  }

  return (
    <Box className={style.inputBox}>
      <CustomInput
        type={"number"}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        autoComplete="off"
        placeholder="Card number"
        className={style.inputNumbers}
        onInput={(e) => {
          e.target.value = maxSize(e.target.value, 16);
        }}
      />
      <Box className={style.inputDateBox}>
        <CustomInput
          value={month}
          onChange={(e) => handleMonth(e.target.value)}
          className={style.inputDateMonth}
          autoComplete="off"
          onInput={(e) => {
            e.target.value = maxSize(e.target.value, 2);
          }}
          placeholder="MM"
        />
        /
        <CustomInput
          value={year}
          onChange={(e) => setCardYear(e.target.value)}
          className={style.inputDateYear}
          autoComplete="off"
          onInput={(e) => {
            e.target.value = maxSize(e.target.value, 4);
          }}
          placeholder="YYYY"
        />
      </Box>
      <CustomInput
        value={cvv}
        onChange={(e) => setCardCvv(e.target.value)}
        className={style.inputDateYear}
        autoComplete="off"
        onInput={(e) => {
          e.target.value = maxSize(e.target.value, 3);
        }}
        placeholder="CVV"
      />
    </Box>
  );
}

export default CardNumbers;

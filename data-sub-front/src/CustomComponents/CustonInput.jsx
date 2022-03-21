import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInput = styled(TextField)({
  'input': {
    '&::placeholder': {
      fontSize: '10px'
    }
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "5px 5px",
  },
  "& .MuiOutlinedInput-input": {
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
    },
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "gray",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
      border: "none",
      borderBottom: "1px gray solid",
      borderRadius: "0px",
    },
    "&:hover fieldset": {
      borderColor: "gray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
});

export default CustomInput;
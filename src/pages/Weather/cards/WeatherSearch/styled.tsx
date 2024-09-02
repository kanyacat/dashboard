import { Button, styled, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface ISearchTextFieldProps {
  setCity: Dispatch<SetStateAction<string>>;
}

export const SearchTextField = (props: ISearchTextFieldProps) => {
  const { setCity } = props;
  return (
    <TextField
      id="outlined-helperText"
      variant="outlined"
      onChange={(e) => setCity(e.target.value)}
      aria-label="City"
      placeholder="Введите город..."
      size="small"
      InputProps={{
        sx: {
          borderRadius: 5,
          mr: 1,
          backgroundColor: "#fff",
          color: "#000",
          pl: "3px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #121211",
          },
        },
      }}
    />
  );
};

export const SearchButton = styled(Button)(() => ({
  borderRadius: "100%",
  padding: "5px",
  minWidth: "10px",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#121211",
  },
}));

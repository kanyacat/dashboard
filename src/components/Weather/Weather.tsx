import React from "react";
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { DisplayWeather } from "./displayWeather/DisplayWeather";
import SearchIcon from "@mui/icons-material/Search";
import { backgrounds } from "../../helpers/backgroundWeather";
import { useAppSelector } from "../../redux/hooks";

export const Weather = () => {
  const [city, setCity] = React.useState("");
  const [formData, setFormData] = React.useState("");

  const weather = useAppSelector((state) => state.weather.items);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(city);
  };

  return (
    <Card
      sx={{
        background:
          weather.current && `${backgrounds[weather.current.condition.code]}`,
        borderRadius: "1.5rem",
        maxWidth: "320px",
      }}
    >
      <CardContent>
        <form onSubmit={(e) => onSubmit(e)}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
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
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "100%",
                padding: "5px",
                minWidth: "10px",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#121211",
                },
              }}
            >
              <SearchIcon
                sx={{
                  color: "#121211",
                  "&:hover": {
                    fill: "#fff",
                  },
                }}
              />
            </Button>
          </Box>
        </form>
        <DisplayWeather city={formData.toLowerCase()} />
      </CardContent>
    </Card>
  );
};

import React from "react";
import {
  Button,
  Card,
  CardContent,
  FormLabel,
  Input,
  Typography,
} from "@mui/material";
import { DisplayWeather } from "./displayWeather/DisplayWeather";

export const Weather = () => {
  const [city, setCity] = React.useState("");
  const [formData, setFormData] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData(city);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={onSubmit}>
          <FormLabel>
            <Typography variant="h6" color="textPrimary" mb={1}>
              Населённый пункт
            </Typography>
          </FormLabel>
          <Input
            onChange={(e) => setCity(e.target.value)}
            aria-label="City"
            placeholder="Введите город..."
            sx={{ mr: 1 }}
          />
          <Button type="submit" variant="contained">
            Поиск
          </Button>
        </form>
        <DisplayWeather city={formData} />
      </CardContent>
    </Card>
  );
};

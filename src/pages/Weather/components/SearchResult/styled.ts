import { Box, styled, Typography } from "@mui/material";

export const NoResultWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  mt: "20px",
}));

export const SearchResultWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  padding: "25px 0",
}));

export const WeatherForTwoDaysWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  maxWidth: "299px",
  marginTop: "30px",
}));

export const DayCardWrapper = styled(Box)(() => ({
  padding: "10px",
  borderRadius: "14px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.5)",
}));

export const DayCardTitle = styled(Typography)(() => ({
  textAlign: "center",
  fontWeight: 600,
}));

export const TemperatureTitle = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: 600,
  displa: "flex",
  alignItem: "center",
  textAlign: "center",
}));

export const LocationTitle = styled(Typography)(() => ({
  color: "#fff",
  marginBottom: "40px",
  textAlign: "center",
}));

export const HumidityAndWindWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const CountText = styled(Typography)(() => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  marginLeft: "8px",
}));

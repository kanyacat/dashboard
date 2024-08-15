import { Box, styled, Typography } from "@mui/material";

interface IWeatherForecastTitleProps {
  matchesSm: boolean;
}

export const WeatherForecastTitle = ({
  matchesSm,
}: IWeatherForecastTitleProps) => {
  return (
    <Typography
      variant="h1"
      fontSize={"28px"}
      paddingTop={"80px"}
      fontWeight={700}
      textAlign={!matchesSm ? "left" : "center"}
      sx={{
        color: (theme) => theme.palette.primary.dark,
      }}
    >
      Weather Forecast
    </Typography>
  );
};

export const WeatherWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "320px 250px 370px",
  gridTemplateAreas: `"search chart chart"
  "search chance sunriset"`,
  paddingTop: "20px",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
      "search chance"
      "search sunriset"
      "chart chart"
    `,
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `
      "search"
      "chart"
      "chance"
      "sunriset"
    `,
  },
}));

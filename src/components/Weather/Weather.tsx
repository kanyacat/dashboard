import { Box, Typography, useMediaQuery } from "@mui/material";
import { WeatherSearch } from "./WeatherSearch/WeatherSearch";
import { ChartWeather } from "./ChartWeather/ChartWeather";
import { ChanceOfRain } from "./ChanceOfRain/ChanceOfRain";
import { Sunriseset } from "./Sunriseset/Sunriseset";

export const Weather = () => {
  const matchesSm = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Typography
        variant="h1"
        fontSize={"28px"}
        pt={"30px"}
        fontWeight={700}
        textAlign={!matchesSm ? "left" : "center"}
        sx={{
          color: (theme) => theme.palette.primary.dark,
        }}
      >
        Weather Forecast
      </Typography>
      <Box
        display={"flex"}
        alignItems={"start"}
        flexWrap={"wrap"}
        gap={"20px"}
        paddingTop={"20px"}
        justifyContent={matchesSm ? "center" : ""}
      >
        <WeatherSearch />
        <Box
          display={"flex"}
          textAlign={"center"}
          flexDirection={"column"}
          justifyContent={matchesSm ? "center" : ""}
          alignItems={"center"}
          gap={"2px"}
        >
          <ChartWeather />
          <Box
            display={"flex"}
            gap={"20px"}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            <ChanceOfRain />
            <Sunriseset />
          </Box>
        </Box>
      </Box>
    </>
  );
};

import { useMediaQuery } from "@mui/material";
import { WeatherSearch } from "../cards/WeatherSearch/WeatherSearch";
import { ChartWeather } from "../cards/ChartWeather/ChartWeather";
import { ChanceOfRain } from "../cards/ChanceOfRain/ChanceOfRain";
import { Sunriset } from "../cards/Sunriseset/Sunriset";
import { WeatherForecastTitle, WeatherWrapper } from "./styled";

export const WeatherPage = () => {
  const matchesSm = useMediaQuery("(max-width:600px)");

  return (
    <>
      <WeatherForecastTitle matchesSm={matchesSm} />
      <WeatherWrapper justifyContent={matchesSm ? "center" : ""}>
        <WeatherSearch />
        <ChartWeather />
        <ChanceOfRain />
        <Sunriset />
      </WeatherWrapper>
    </>
  );
};

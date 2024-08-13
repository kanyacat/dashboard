import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { weatherAPI } from "../../../api/weatherAPI";
import { WeatherType } from "../../../types/weatherTypes";
import { Box, CardContent, CircularProgress, Typography } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import WavesIcon from "@mui/icons-material/Waves";
interface IWeatherApiProps {
  city: string;
  setBackground: Dispatch<SetStateAction<number>>;
}

export const DisplayWeather = (props: IWeatherApiProps) => {
  const { city, setBackground } = props;

  const [weather, setWeather] = useState<WeatherType>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const data = await weatherAPI(city ? city : "Тверь");

      setWeather(data);
      setBackground(data.current.condition.code);

      setIsLoading(false);
    };

    fetchData();
  }, [city]);

  if (isLoading) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {weather && (
        <CardContent>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <img
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
              />
              <Typography
                variant="h4"
                color="textPrimary"
                display={"flex"}
                alignItems={"center"}
              >
                {weather?.current.temp_c}
                <span>{"°C"}</span>
              </Typography>
              <Typography variant="h5" color="textPrimary" mb={"40px"}>
                {weather.location.country}, {weather.location.name}
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box mr={"60px"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <WavesIcon />
                    <Typography
                      variant="h5"
                      color="textPrimary"
                      display={"flex"}
                      alignItems={"center"}
                      ml={"8px"}
                    >
                      {weather.current.humidity}%
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="textPrimary">
                    Humidity
                  </Typography>
                </Box>
                <Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <AirIcon />
                    <Typography
                      variant="h5"
                      color="textPrimary"
                      display={"flex"}
                      alignItems={"center"}
                      ml={"8px"}
                    >
                      {weather.current.wind_kph}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="textPrimary">
                    Wind speed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      )}
    </>
  );
};

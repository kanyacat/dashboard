import { useEffect, useState } from "react";
import { weatherAPI } from "../../../api/weatherAPI";
import { WeatherType } from "../../../types/weatherTypes";
import { Box, CardContent, CircularProgress, Typography } from "@mui/material";

interface IWeatherApiProps {
  city: string;
}

export const DisplayWeather = (props: IWeatherApiProps) => {
  const { city } = props;

  const [weather, setWeather] = useState<WeatherType>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const data = await weatherAPI(city ? city : "Тверь");

      setWeather(data);
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
        <div>
          <CardContent>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box>
                <Typography variant="h4" color="textPrimary">
                  {weather.location.country}, {weather.location.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {weather.location.lon}, {weather.location.lat}
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Typography
                  variant="h4"
                  color="textPrimary"
                  display={"flex"}
                  alignItems={"center"}
                >
                  {weather.current.temp_c > 0 && "+"}
                  {weather?.current.temp_c}
                  <span>&#176;{"C"}</span>
                  <img
                    src={weather.current.condition.icon}
                    alt={weather.current.condition.text}
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  textAlign={"center"}
                >
                  {weather.current.condition.text}
                </Typography>
              </Box>
            </Box>
          </CardContent>

          <CardContent>
            <Box>
              <Typography variant="h6" color="textPrimary" mb={1}>
                Влажность: {weather?.current.humidity} %
              </Typography>
              <Typography variant="h6" color="textPrimary" mb={1}>
                Ветер: {weather?.current.wind_kph} km/h
              </Typography>
              <Typography variant="h6" color="textPrimary">
                Атмосферное давление:{" "}
                {Math.round(weather?.current.pressure_mb / 1.333)} мм. рт. ст.
              </Typography>
            </Box>
          </CardContent>

          <CardContent>
            <Typography mb={3} variant="h5" color="textPrimary">
              Погода на 5 дней:
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {weather?.forecast?.forecastday.map((day) => {
                return (
                  <Box
                    key={day.date}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Typography key={day.date} variant="h6" color="textPrimary">
                      {day.date}
                    </Typography>
                    <img
                      src={day.day.condition.icon}
                      alt={day.day.condition.text}
                    />
                    <Typography
                      variant="subtitle2"
                      color="textPrimary"
                      marginTop={1}
                    >
                      {day.day.condition.text}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      textAlign={"center"}
                    >
                      {day.day.mintemp_c} <span>&#176;{"C"}</span> ~{" "}
                      {day.day.maxtemp_c} <span>&#176;{"C"}</span>
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </CardContent>
        </div>
      )}
    </>
  );
};

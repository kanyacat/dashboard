import { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import WavesIcon from "@mui/icons-material/Waves";
import { useGetWeatherByCityQuery } from "../../../../redux/weather/weatherApi";
import { useAppDispatch } from "../../../../redux/hooks";
import { setWeather } from "../../../../redux/weather/weatherSlice";
import { WeatherForTwoDays } from "./WeatherForTwoDays/WeatherForTwoDays";
import {
  CountText,
  HumidityAndWindWrapper,
  LocationTitle,
  NoResultWrapper,
  SearchResultWrapper,
  TemperatureTitle,
} from "./styled";

interface IWeatherApiProps {
  city: string;
}

export const SearchResult = ({ city }: IWeatherApiProps) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetWeatherByCityQuery(
    city ? city : "тверь"
  );

  useEffect(() => {
    if (data) {
      dispatch(setWeather(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) {
    return (
      <NoResultWrapper>
        <CircularProgress color="inherit" />
      </NoResultWrapper>
    );
  }

  if (error) {
    return (
      <NoResultWrapper>
        <Typography textAlign={"center"} color={"error"}>
          Произошла ошибка. Введите корректный населённый пункт.
        </Typography>
      </NoResultWrapper>
    );
  }

  return (
    <>
      {data && (
        <SearchResultWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={data.current?.condition.icon}
              alt={data.current?.condition.text}
            />
            <TemperatureTitle variant="h4">
              {data.current?.temp_c}
              <span>{"°C"}</span>
            </TemperatureTitle>
            <LocationTitle variant="h5">
              {data.location?.country}, {data.location?.name}
            </LocationTitle>
            <HumidityAndWindWrapper>
              <div style={{ marginRight: "60px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <WavesIcon />
                  <CountText variant="h6">{data.current?.humidity}%</CountText>
                </div>
                <Typography variant="subtitle2" fontWeight={"400"} color="#fff">
                  Humidity
                </Typography>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AirIcon />
                  <CountText variant="h6">{data.current?.wind_kph}</CountText>
                </div>
                <Typography variant="subtitle2" fontWeight={"400"} color="#fff">
                  Wind speed
                </Typography>
              </div>
            </HumidityAndWindWrapper>
          </div>
          <WeatherForTwoDays data={data} />
        </SearchResultWrapper>
      )}
    </>
  );
};

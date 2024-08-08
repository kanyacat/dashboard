import { useEffect } from "react";
import { Box, CardContent, CircularProgress, Typography } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import WavesIcon from "@mui/icons-material/Waves";
import { useGetWeatherByCityQuery } from "../../../redux/weather/weatherApi";
import { useAppDispatch } from "../../../redux/hooks";
import { setWeather } from "../../../redux/weather/weatherSlice";
interface IWeatherApiProps {
  city: string;
}

export const DisplayWeather = (props: IWeatherApiProps) => {
  const { city } = props;

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
      <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
        <Typography textAlign={"center"} color={"error"}>
          Произошла ошибка. Введите корректный населённый пункт.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {data && (
        <CardContent>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#fff"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <img
                src={data.current?.condition.icon}
                alt={data.current?.condition.text}
              />
              <Typography
                variant="h4"
                color="#fff"
                fontWeight={"600"}
                display={"flex"}
                alignItems={"center"}
                textAlign={"center"}
              >
                {data.current?.temp_c}
                <span>{"°C"}</span>
              </Typography>
              <Typography
                variant="h5"
                color="#fff"
                mb={"40px"}
                textAlign={"center"}
              >
                {data.location?.country}, {data.location?.name}
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
                      variant="h6"
                      color="#fff"
                      display={"flex"}
                      alignItems={"center"}
                      ml={"8px"}
                    >
                      {data.current?.humidity}%
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={"400"}
                    color="#fff"
                  >
                    Humidity
                  </Typography>
                </Box>
                <Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <AirIcon />
                    <Typography
                      variant="h6"
                      color="#fff"
                      display={"flex"}
                      alignItems={"center"}
                      ml={"8px"}
                    >
                      {data.current?.wind_kph}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={"400"}
                    color="#fff"
                  >
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

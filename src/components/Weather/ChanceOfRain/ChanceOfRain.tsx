import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { backgrounds } from "../../../helpers/backgroundWeather";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        size={125}
        thickness={5}
        {...props}
        sx={{
          color: "#fff",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={"700"}
          color={"#fff"}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export const ChanceOfRain = () => {
  const weather = useAppSelector((state) => state.weather.items);

  return (
    <Card
      sx={{
        background:
          weather.current && `${backgrounds[weather.current.condition.code]}`,
        borderRadius: "1.5rem",
        maxWidth: "340px",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          mb={"15px"}
          fontWeight={700}
          sx={{ color: "#fff" }}
        >
          Вероятность осадков
        </Typography>
        <CircularProgressWithLabel
          value={weather.forecast?.forecastday[0].day.daily_chance_of_rain}
        />
      </CardContent>
    </Card>
  );
};

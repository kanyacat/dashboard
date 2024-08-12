import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { backgrounds } from "../../../helpers/backgroundWeather";

const SemiCircle = styled(Box)(() => ({
  width: "220px",
  height: "110px",
  borderRadius: "160px 160px 0 0",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  border: "2px dashed  #faf400",
  borderBottom: "none",
}));

export const Sunriseset = () => {
  const weather = useAppSelector((state) => state.weather.items);
  dayjs.extend(customParseFormat);

  return (
    <Card
      sx={{
        background:
          weather.current && `${backgrounds[weather.current.condition.code]}`,
        borderRadius: "1.5rem",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          textAlign={"center"}
          mb={"10px"}
          sx={{ color: "#fff" }}
        >
          Световой день
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            color: "#fff",
            height: "100%",
          }}
        >
          <Box display={"flex"} alignItems={"end"}>
            <Box textAlign={"center"}>
              <WbSunnyIcon sx={{ color: "#faf400" }} />
              <Typography>
                {dayjs(
                  weather.forecast?.forecastday[0]?.astro.sunrise,
                  "hh:mm A"
                ).format("HH:mm")}
              </Typography>
            </Box>
            <Box pb={"25px"}>
              <SemiCircle />
            </Box>

            <Box textAlign={"center"}>
              <NightlightRoundIcon sx={{ color: "#faf400" }} />
              <Typography>
                {dayjs(
                  weather.forecast?.forecastday[0]?.astro.sunset,
                  "hh:mm A"
                ).format("HH:mm")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

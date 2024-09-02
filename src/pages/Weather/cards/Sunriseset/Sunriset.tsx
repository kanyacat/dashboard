import { Typography } from "@mui/material";
import { useAppSelector } from "../../../../redux/hooks";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { TitleCard } from "../../components/TitlteCard/TitleCard";
import { SemiCircle, SursisetWrapper } from "./styled";
import { CardWrapper } from "../../components/CardWrapper/CardWrapper";

export const Sunriset = () => {
  const weather = useAppSelector((state) => state.weather.items);
  dayjs.extend(customParseFormat);

  return (
    <CardWrapper styles={{ gridArea: "sunriset" }}>
      <TitleCard>Световой день</TitleCard>
      <SursisetWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <WbSunnyIcon sx={{ color: "#faf400" }} />
            <Typography>
              {dayjs(
                weather.forecast?.forecastday[0]?.astro.sunrise,
                "hh:mm A"
              ).format("HH:mm")}
            </Typography>
          </div>
          <div style={{ paddingBottom: "25px" }}>
            <SemiCircle />
          </div>
          <div style={{ textAlign: "center" }}>
            <NightlightRoundIcon sx={{ color: "#faf400" }} />
            <Typography>
              {dayjs(
                weather.forecast?.forecastday[0]?.astro.sunset,
                "hh:mm A"
              ).format("HH:mm")}
            </Typography>
          </div>
        </div>
      </SursisetWrapper>
    </CardWrapper>
  );
};

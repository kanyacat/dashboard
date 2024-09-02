import { useAppSelector } from "../../../../redux/hooks";
import { CardContent } from "@mui/material";
import { LineChartWeather } from "../../components/LineChartWeather/LineChartWeather";
import { CardWrapper } from "../../components/CardWrapper/CardWrapper";
import { TitleCard } from "../../components/TitlteCard/TitleCard";

export const ChartWeather = () => {
  const weather = useAppSelector((state) => state.weather.items);

  return (
    <CardWrapper
      styles={{
        // width: {
        //   sm: "40rem",
        //   xs: "90vw",
        // },
        // mb: "10px",
        gridArea: "chart",
      }}
    >
      <CardContent sx={{ height: "250px" }}>
        <TitleCard>Средняя температура по часам</TitleCard>
        <LineChartWeather weather={weather} />
      </CardContent>
    </CardWrapper>
  );
};

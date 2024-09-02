import { useAppSelector } from "../../../../redux/hooks";
import { CircularProgressWithLabel } from "../../components/CircularProgressWithLabel/CircularProgressWithLabel";
import { TitleCard } from "../../components/TitlteCard/TitleCard";
import { CardWrapper } from "../../components/CardWrapper/CardWrapper";

export const ChanceOfRain = () => {
  const weather = useAppSelector((state) => state.weather.items);

  return (
    <CardWrapper
      styles={{
        gridArea: "chance",
        // maxWidth: "290px",
      }}
    >
      <TitleCard>Вероятность осадков</TitleCard>
      <CircularProgressWithLabel
        value={
          weather.forecast
            ? weather.forecast?.forecastday[0].day.daily_chance_of_rain
            : 0
        }
      />
    </CardWrapper>
  );
};

import {
  DayCardTitle,
  DayCardWrapper,
  WeatherForTwoDaysWrapper,
} from "../styled";
import { dayWeek } from "../../../../../helpers/weekTranslator";
import dayjs from "dayjs";
import { WeatherType } from "../../../../../types/weatherTypes";

interface IProps {
  data: WeatherType;
}

export const WeatherForTwoDays = (props: IProps) => {
  const { data } = props;

  return (
    <WeatherForTwoDaysWrapper>
      {data?.forecast?.forecastday.slice(1).map((day) => {
        const date = new Date(day.date);

        return (
          <DayCardWrapper key={day.astro.moon_illumination}>
            <DayCardTitle variant="subtitle1">
              {dayWeek[dayjs(date).format("dddd")]}
            </DayCardTitle>
            <img
              width={"50px"}
              height={"50px"}
              src={day.day.condition.icon}
              alt={day.day.condition.text}
            />
            <DayCardTitle variant="subtitle1">
              {Math.round((day.day.maxtemp_c + day.day.mintemp_c) / 2)}
              °C
            </DayCardTitle>
          </DayCardWrapper>
        );
      })}
    </WeatherForTwoDaysWrapper>
  );
};

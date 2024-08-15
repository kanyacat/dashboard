import { LineChart } from "@mui/x-charts";
import { lineChartStyles } from "./styles";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { WeatherType } from "../../../../types/weatherTypes";

interface ILineChartWeatherProps {
  weather: WeatherType;
}

export const LineChartWeather = ({ weather }: ILineChartWeatherProps) => {
  const [chart, setChart] = useState<Date[]>([]);

  useEffect(() => {
    setChart(
      weather.forecast
        ? weather.forecast?.forecastday[0].hour.map((day) => new Date(day.time))
        : []
    );
  }, [weather]);

  return (
    <LineChart
      tooltip={{ trigger: "item" }}
      colors={["white"]}
      xAxis={[
        {
          data: chart,
          valueFormatter: (date) => dayjs(date).format("HH:mm"),
          scaleType: "band",
        },
      ]}
      yAxis={[
        {
          valueFormatter: (value) => `${value}°C`,
        },
      ]}
      series={[
        {
          data:
            chart.length > 0
              ? weather?.forecast?.forecastday[0].hour.map((day) => day.temp_c)
              : [],
          valueFormatter: (value) =>
            `${Math.round(Number(value) * 100) / 100}°C`,
        },
      ]}
      sx={lineChartStyles}
    />
  );
};

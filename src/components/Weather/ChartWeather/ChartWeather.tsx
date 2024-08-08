import { LineChart } from "@mui/x-charts";
import { useAppSelector } from "../../../redux/hooks";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { backgrounds } from "../../../helpers/backgroundWeather";

export const ChartWeather = () => {
  const weather = useAppSelector((state) => state.weather.items);
  const [array, setArray] = useState<Date[]>([]);

  useEffect(() => {
    setArray(weather.forecast?.forecastday.map((day) => new Date(day.date)));
  }, [weather]);

  return (
    <>
      {array && (
        <Card
          sx={{
            background:
              weather.current &&
              `${backgrounds[weather.current.condition.code]}`,
            borderRadius: "1.5rem",
            width: "30rem",
          }}
        >
          <CardContent sx={{ height: "350px" }}>
            <Typography
              variant="h6"
              textAlign={"center"}
              sx={{ color: "#fff" }}
            >
              Средняя температура по дням
            </Typography>
            <LineChart
              tooltip={{ trigger: "item" }}
              colors={["white"]}
              xAxis={[
                {
                  data: array,
                  valueFormatter: (date) => dayjs(date).format("D MMM"),
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
                    array.length > 0
                      ? weather?.forecast?.forecastday.map(
                          (day) => (day.day.maxtemp_c + day.day.mintemp_c) / 2
                        )
                      : [],
                  valueFormatter: (value) =>
                    `${Math.round(Number(value) * 100) / 100}°C`,
                },
              ]}
              sx={{
                "& .MuiChartsTooltip-root": {
                  color: "black",
                },
                "& .MuiChartsAxisHighlight-root": {
                  stroke: "#fff",
                },
                "& .MuiMarkElement-root": {
                  fill: "#fff",
                },
                "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                  strokeWidth: "0.4",
                  fill: "#fff",
                },
                // change bottom label styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                  strokeWidth: "0.5",
                  fill: "#fff",
                },
                // bottomAxis Line Styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                  stroke: "#fff",
                  strokeWidth: 0.4,
                },
                // leftAxis Line Styles
                "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                  stroke: "#fff",
                  strokeWidth: 0.4,
                },
                "& .MuiChartsAxis-root .MuiChartsAxis-tick": {
                  stroke: "#fff",
                  strokeWidth: 0.4,
                },
              }}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

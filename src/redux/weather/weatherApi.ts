import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherType } from "../../types/weatherTypes";

const API_KEY = "1b40354979024edd9dc84031243107";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.weatherapi.com/v1/`,
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<WeatherType, string>({
      query: (city) => `forecast.json?key=${API_KEY}&q=${city}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherByCityQuery } = weatherApi;

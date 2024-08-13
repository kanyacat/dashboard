import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "b413a15aa522785a783e1f05";

export const currenciesApi = createApi({
  reducerPath: "currenciesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://v6.exchangerate-api.com/v6/`,
  }),
  endpoints: (builder) => ({
    getCurrenciesByDate: builder.query<unknown, string>({
      query: () => `${API_KEY}/latest/RUB`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrenciesByDateQuery } = currenciesApi;

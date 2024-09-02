import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "d0edd26019684c508b79ac6814e7507d";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsapi.org/v2/`,
  }),
  endpoints: (builder) => ({
    getNewsByCategory: builder.query<any, string>({
      query: ({ category, size }) =>
        `top-headlines?country=ru&category=${category}&pageSize=${size}&apiKey=${API_KEY}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsByCategoryQuery } = newsApi;

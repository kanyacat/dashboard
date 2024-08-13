import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "./notifications/notificationsSlice";
import weatherReducer from "./weather/weatherSlice";
import { weatherApi } from "./weather/weatherApi";
import { currenciesApi } from "./currencies/currenciesApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    weather: weatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [currenciesApi.reducerPath]: currenciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      weatherApi.middleware,
      currenciesApi.middleware
    ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { WeatherType } from "../../types/weatherTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  items: WeatherType;
}

const initialState: WeatherState = {
  items: {
    location: undefined,
    current: undefined,
  },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherType>) => {
      state.items = action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;

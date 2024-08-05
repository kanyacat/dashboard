import { INotifications } from "../../types/notificationsTypes";
import { notificationList } from "./../../mocks/notificationList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationsState {
  notifications: INotifications[];
}

const initialState: NotificationsState = {
  notifications: notificationList,
};

export const notificatiionsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    deleteNotification: (state, action: PayloadAction<number>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { deleteNotification } = notificatiionsSlice.actions;

export default notificatiionsSlice.reducer;

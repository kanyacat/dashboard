import { IconButton, Typography } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { INotifications } from "../../../types/notificationsTypes";
import { NotificationsHeader } from "./styled";

interface INotificationListContentProps {
  notifications: INotifications[];
}

export const NotificationListContent = ({
  notifications,
}: INotificationListContentProps) => {
  return (
    <div style={{ padding: "15px" }}>
      <NotificationsHeader>
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Notifications
        </Typography>
        <IconButton color="inherit" sx={{ mb: "5px" }}>
          <MarkEmailReadIcon />
        </IconButton>
      </NotificationsHeader>
      {notifications.map((note: INotifications) => (
        <NotificationItem
          key={note.id}
          title={note.title}
          date={note.date}
          description={note.description}
          id={note.id}
        />
      ))}
    </div>
  );
};

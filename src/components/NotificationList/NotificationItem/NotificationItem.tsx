import { Avatar, Divider, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteNotification } from "../../../redux/notifications/notificationsSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { NotificationItemWrapper } from "./styled";

interface INotification {
  title: string;
  description: string;
  date: string;
  id: number;
}

export const NotificationItem = ({
  title,
  date,
  description,
  id,
}: INotification) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteNotification(id));
  };

  return (
    <>
      <NotificationItemWrapper component="section">
        <Avatar alt={title} />
        <div>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography>{description}</Typography>
          <Typography variant="caption">{date}</Typography>
        </div>
        <IconButton onClick={handleDeleteItem}>
          <ClearIcon sx={{ width: "20px", height: "20px" }} />
        </IconButton>
      </NotificationItemWrapper>
      <Divider />
    </>
  );
};

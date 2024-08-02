import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface INotification {
  title: string;
  description: string;
  date: string;
}

export const NotificationItem = ({
  title,
  date,
  description,
}: INotification) => {
  return (
    <>
      <Box
        component="section"
        sx={{ p: 2 }}
        display={"grid"}
        gridTemplateColumns={"40px 1fr 35px"}
        alignItems={"flex-start"}
        gap="20px"
      >
        <Avatar alt={title} />
        <Box>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography>{description}</Typography>
          <Typography variant="caption">{date}</Typography>
        </Box>
        <IconButton>
          <ClearIcon sx={{ color: "#32383e", width: "20px", height: "20px" }} />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
};

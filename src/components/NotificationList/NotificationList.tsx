import {
  Badge,
  Box,
  ClickAwayListener,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NotificationItem } from "./NotificationItem/NotificationItem";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { LightTooltip } from "../LightTooltip/LightTooltip";
import { notificationList } from "../../mocks/notificationList";

export const NotificationList = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <LightTooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement="bottom-start"
          title={
            <Box sx={{ padding: "15px" }}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"50px"}
              >
                <Typography variant="h6" sx={{ mb: "10px" }}>
                  Notifications
                </Typography>
                <IconButton color="inherit" sx={{ mb: "5px" }}>
                  <MarkEmailReadIcon />
                </IconButton>
              </Box>
              {notificationList.map((note) => (
                <NotificationItem
                  key={note.id}
                  title={note.title}
                  date={note.date}
                  description={note.description}
                />
              ))}
            </Box>
          }
        >
          <IconButton onClick={handleTooltipOpen} color="inherit">
            <Badge badgeContent={3} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </LightTooltip>
      </div>
    </ClickAwayListener>
  );
};

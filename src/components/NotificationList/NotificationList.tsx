import { Badge, ClickAwayListener, IconButton } from "@mui/material";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { CustomTooltip } from "../CustomTooltip/CustomTooltip";
import { useAppSelector } from "../../redux/hooks";
import { NotificationListContent } from "./NotificationListContent/NotificationListContent";

export const NotificationList = () => {
  const [open, setOpen] = useState(false);

  const notifications = useAppSelector(
    (state) => state.notifications.notifications
  );

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <CustomTooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement="bottom-start"
          title={<NotificationListContent notifications={notifications} />}
        >
          <IconButton onClick={handleTooltipOpen} color="inherit">
            <Badge badgeContent={notifications.length} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </CustomTooltip>
      </div>
    </ClickAwayListener>
  );
};

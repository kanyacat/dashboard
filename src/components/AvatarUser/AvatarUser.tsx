import { Avatar, ClickAwayListener, IconButton } from "@mui/material";
import React from "react";
import { CustomTooltip } from "../CustomTooltip/CustomTooltip";
import { UserTooltip } from "../UserTooltip/UserTooltip";

interface IAvatarUserProps {
  withTooltip: boolean;
  name: string;
  email: string;
  avatar: string;
}

export const AvatarUser = (props: IAvatarUserProps) => {
  const { withTooltip, name, email, avatar } = props;

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  if (!withTooltip) {
    return <Avatar alt={name} src={avatar} />;
  }

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
          title={<UserTooltip name={name} email={email} />}
        >
          <IconButton onClick={handleTooltipOpen} color="inherit">
            <Avatar alt={name} src={avatar} />
          </IconButton>
        </CustomTooltip>
      </div>
    </ClickAwayListener>
  );
};

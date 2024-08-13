import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { LightTooltip } from "../LightTooltip/LightTooltip";
import { userTooltip } from "../../mocks/userTooltip";

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
              <Typography fontSize={"17px"}>{name}</Typography>
              <Typography variant="body2" sx={{ color: "#667085" }}>
                {email}
              </Typography>
              <Divider sx={{ margin: "15px 0" }} />
              {userTooltip.map((tooltip) => (
                <ListItemButton
                  sx={{ borderRadius: "10px", padding: "2px 3px", mb: "3px" }}
                  key={tooltip.name}
                >
                  <ListItemIcon>{tooltip.icon}</ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "17px",
                      ml: "-20px",
                    }}
                    primary={tooltip.name}
                  />
                </ListItemButton>
              ))}
              <Divider sx={{ mt: "15px", mb: "10px" }} />
              <Button
                sx={{
                  textAlign: "center",
                  color: "#667085",
                  padding: "5px 80px",
                  fontWeight: "400",
                }}
              >
                Log out
              </Button>
            </Box>
          }
        >
          <IconButton onClick={handleTooltipOpen} color="inherit">
            <Avatar alt={name} src={avatar} />
          </IconButton>
        </LightTooltip>
      </div>
    </ClickAwayListener>
  );
};

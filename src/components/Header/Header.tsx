import { Divider, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NotificationList } from "../NotificationList/NotificationList";
import { AvatarUser } from "../AvatarUser/AvatarUser";
import { user } from "../../mocks/user";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";
import { AppBar, HeaderToolbar } from "./styled";

export interface IHeaderProps {
  open: boolean;
  toggleDrawer: () => void;
}

export const Header = (props: IHeaderProps) => {
  const { open, toggleDrawer } = props;

  const matches = useMediaQuery("(min-width:1000px)");

  return (
    <AppBar position="absolute">
      <HeaderToolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            ...(matches && open && { display: "block" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Toolbar sx={{ flexGrow: 1 }} />
        <ToggleTheme />
        <NotificationList />
        <Divider orientation="vertical" flexItem sx={{ m: "0 20px" }} />
        <AvatarUser
          withTooltip={true}
          name={user.name}
          email={user.mail}
          avatar={user.avatar}
        />
      </HeaderToolbar>
      <Divider />
    </AppBar>
  );
};

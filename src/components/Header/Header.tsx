import {
  Divider,
  IconButton,
  styled,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { NotificationList } from "../NotificationList/NotificationList";
import { AvatarUser } from "../AvatarUser/AvatarUser";
import { user } from "../../mocks/user";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer - 1,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: "none",
}));

export interface IHeaderProps {
  open: boolean;
  toggleDrawer: () => void;
}

export const Header = (props: IHeaderProps) => {
  const { open, toggleDrawer } = props;

  const matches = useMediaQuery("(min-width:1000px)");

  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{
          pr: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
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
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

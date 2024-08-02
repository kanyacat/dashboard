import {
  IconButton,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  [theme.breakpoints.up("md")]: {
    zIndex: theme.zIndex.drawer - 1,
  },
  backgroundColor: "#fff",
  color: "#000",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export interface IHeaderProps {
  open: boolean;
  toggleDrawer: () => void;
}

export const Header = (props: IHeaderProps) => {
  const { open, toggleDrawer } = props;

  const matches = useMediaQuery("(min-width:758px)");

  return (
    <AppBar position="absolute" open={open}>
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
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

import { styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth: number = 320;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main,
    color: "#e4e4e4",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up("md")]: {
        width: theme.spacing(0),
      },
      left: "-1px",
    }),
  },
  "&.MuiDrawer-docked": {
    [theme.breakpoints.down("md")]: {
      width: "0",
    },
  },
}));

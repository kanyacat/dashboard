import {
  IconButton,
  List,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SidebarList } from "../SidebarList/SidebarList";
import MuiDrawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ClearIcon from "@mui/icons-material/Clear";
import { useRef } from "react";

const drawerWidth: number = 320;

const Drawer = styled(MuiDrawer, {
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

interface IPropsSidebar {
  open: boolean;
  toggleDrawer: () => void;
}

export const Sidebar = (props: IPropsSidebar) => {
  const { open, toggleDrawer } = props;
  const drawerRef = useRef(null);
  const matches = useMediaQuery("(min-width:900px)");

  const closeDrawer = (e: MouseEvent) => {
    //@ts-ignore
    if (!matches && open && !drawerRef.current?.contains(e.target)) {
      toggleDrawer();
    }
  };

  document.addEventListener("mousedown", closeDrawer);

  return (
    <Drawer
      ref={drawerRef}
      variant="permanent"
      open={open}
      sx={!matches ? { width: 10 } : {}}
    >
      <Toolbar
        sx={{
          marginLeft: "2px",
          marginTop: "10px",
        }}
      >
        <DashboardIcon sx={{ mr: "10px", width: "40px", height: "40px" }} />
        <Typography sx={{ fontSize: "20px", fontWeight: "600", mr: "15px" }}>
          MUI DASHBOARD
        </Typography>
        {!matches && (
          <IconButton onClick={() => closeDrawer}>
            <ClearIcon sx={{ width: "30px", height: "30px", color: "#fff" }} />
          </IconButton>
        )}
      </Toolbar>
      <List component="nav" sx={{ padding: "10px 20px" }}>
        {SidebarList}
      </List>
    </Drawer>
  );
};

import {
  List,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SidebarList } from "../../SidebarList/SidebarList";
import MuiDrawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth: number = 300;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: "#121621",
    color: "#e4e4e4",
    boxSizing: "border-box",
  },
}));

export const Sidebar = () => {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Drawer variant="permanent" sx={!matches ? { width: 10 } : {}}>
      <Toolbar
        sx={{
          margin: "0 auto",
        }}
      >
        <DashboardIcon sx={{ mr: "10px", width: "40px", height: "40px" }} />
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          MUI DASHBOARD
        </Typography>
      </Toolbar>
      <List component="nav" sx={{ padding: "10px 20px" }}>
        {SidebarList}
      </List>
    </Drawer>
  );
};

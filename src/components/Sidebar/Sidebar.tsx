import {
  IconButton,
  List,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SidebarList } from "../SidebarList/SidebarList";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ClearIcon from "@mui/icons-material/Clear";
import { Drawer } from "../Drawer/Drawer";

interface IPropsSidebar {
  open: boolean;
  toggleDrawer: () => void;
}

export const Sidebar = (props: IPropsSidebar) => {
  const { open, toggleDrawer } = props;

  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <Drawer variant="permanent" open={open} sx={!matches ? { width: 10 } : {}}>
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
          <IconButton onClick={toggleDrawer}>
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

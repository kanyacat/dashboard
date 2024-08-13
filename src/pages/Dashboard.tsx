import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Weather } from "../components/Weather/Weather";

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const matches = useMediaQuery("(min-width:1000px)");
  const matchesSm = useMediaQuery("(max-width:600px)");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!matches) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [matches]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} toggleDrawer={toggleDrawer} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          height: "100vh",
          width: "100%",
          overflow: "auto",
          pt: "50px",
          pb: "50px",
        }}
        paddingLeft={!matchesSm ? "20px" : "5px"}
      >
        <Box
          sx={
            !matches && open
              ? {
                  backgroundColor: "#121621",
                  opacity: "0.93",
                  filter: "contrast(125%) brightness(3%)",
                  height: "200%",
                  alignItems: "start",
                }
              : !matches
              ? { justifyContent: "center" }
              : {}
          }
        >
          <Weather />
        </Box>
      </Box>
    </Box>
  );
}

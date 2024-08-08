import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Weather } from "../../components/Weather/Weather";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { ChartWeather } from "../../components/Weather/ChartWeather/ChartWeather";

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const matches = useMediaQuery("(min-width:900px)");
  const theme = useTheme();

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
        }}
        paddingLeft={"20px"}
      >
        <Box
          sx={
            !matches && open
              ? {
                  backgroundColor: "#121621",
                  opacity: "0.93",
                  filter: "contrast(125%) brightness(3%)",
                  height: "100vh",
                  alignItems: "start",
                }
              : !matches
              ? { justifyContent: "center" }
              : {}
          }
        >
          <Typography
            variant="h1"
            fontSize={"28px"}
            pt={"30px"}
            fontWeight={700}
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
          >
            Weather Forecast
          </Typography>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexWrap={"wrap"}
            gap={"20px"}
            paddingTop={"20px"}
          >
            <Weather />
            <ChartWeather />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

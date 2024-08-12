import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Weather } from "../../components/Weather/Weather";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { ChartWeather } from "../../components/Weather/ChartWeather/ChartWeather";
import { ChanceOfRain } from "../../components/Weather/ChanceOfRain/ChanceOfRain";
import { Sunriseset } from "../../components/Weather/Sunriseset/Sunriseset";
import { WeatherSearch } from "../../components/Weather/WeatherSearch/WeatherSearch";

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
          <Typography
            variant="h1"
            fontSize={"28px"}
            pt={"30px"}
            fontWeight={700}
            textAlign={!matchesSm ? "left" : "center"}
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
            justifyContent={matchesSm ? "center" : ""}
          >
            <WeatherSearch />
            <Box
              display={"flex"}
              textAlign={"center"}
              flexDirection={"column"}
              justifyContent={matchesSm ? "center" : ""}
              alignItems={"center"}
              gap={"2px"}
            >
              <ChartWeather />
              <Box
                display={"flex"}
                gap={"20px"}
                flexWrap={"wrap"}
                justifyContent={"center"}
              >
                <ChanceOfRain />
                <Sunriseset />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

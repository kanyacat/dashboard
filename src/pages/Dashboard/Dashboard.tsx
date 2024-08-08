import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Weather } from "../../components/Weather/Weather";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const matches = useMediaQuery("(min-width:900px)");

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
      >
        <Box
          sx={
            !matches && open
              ? {
                  backgroundColor: "#121621",
                  opacity: "0.93",
                  filter: "contrast(125%) brightness(3%)",
                  height: "100vh",
                }
              : {}
          }
          display={"flex"}
        >
          <Container maxWidth="xs" sx={{ pt: 4, pb: 4, ml: 0 }}>
            <Weather />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

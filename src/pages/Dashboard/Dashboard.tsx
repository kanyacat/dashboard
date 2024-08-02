import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Weather } from "../../components/Weather/Weather";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useMediaQuery } from "@mui/material";

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const matches = useMediaQuery("(min-width:900px)");

  React.useEffect(() => {
    if (matches) {
      setOpen(false);
    }
  }, [matches]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} toggleDrawer={toggleDrawer} />
      {(open || matches) && <Sidebar />}

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          // flexGrow: 1,
          height: "100vh",
          width: "100%",
          overflow: "auto",
          pt: "50px",
        }}
      >
        <Container maxWidth="xs" sx={{ mt: 4, mb: 4, ml: 0 }}>
          <Weather />
        </Container>
      </Box>
    </Box>
  );
}

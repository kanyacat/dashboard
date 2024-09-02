import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { ChildrenProps } from "../types/childrenProps";
import { DarkBackground, LayoutMain } from "./styled";

export const Layout = ({ children }: ChildrenProps) => {
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
      <LayoutMain
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
        padding={!matchesSm ? "0 20px" : "0 5px"}
      >
        <DarkBackground matches={matches} open={open}>
          {children}
        </DarkBackground>
      </LayoutMain>
    </Box>
  );
};

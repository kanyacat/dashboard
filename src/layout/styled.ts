import { Box, styled } from "@mui/material";

export const LayoutMain = styled(Box)(() => ({
  height: "100vh",
  width: "100%",
  overflow: "auto",
  pt: "50px",
  pb: "50px",
}));

interface IDarkBackgroundProps {
  open: boolean;
  matches: boolean;
}

export const DarkBackground = styled(Box)(
  ({ open, matches }: IDarkBackgroundProps) =>
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
);

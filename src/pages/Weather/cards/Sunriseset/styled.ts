import { Box, styled } from "@mui/material";

export const SemiCircle = styled(Box)(() => ({
  width: "220px",
  height: "110px",
  borderRadius: "160px 160px 0 0",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  border: "2px dashed  #faf400",
  borderBottom: "none",
}));

export const SursisetWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  color: "#fff",
  height: "100%",
}));

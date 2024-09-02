import { Box, styled } from "@mui/material";

export const NotificationItemWrapper = styled(Box)(() => ({
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "40px 1fr 35px",
  alignItems: "flex-start",
  gap: "20px",
}));

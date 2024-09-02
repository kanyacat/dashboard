import { Typography } from "@mui/material";
import { ChildrenProps } from "../../../../types/childrenProps";

export const TitleCard = ({ children }: ChildrenProps) => {
  return (
    <Typography
      variant="h6"
      fontWeight={700}
      textAlign={"center"}
      mb={"10px"}
      sx={{ color: "#fff" }}
    >
      {children}
    </Typography>
  );
};

import {
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";
import { CircularProgressWithLabelWrapper } from "./styled";

export const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        size={125}
        thickness={5}
        {...props}
        sx={{
          color: "#fff",
        }}
      />
      <CircularProgressWithLabelWrapper>
        <Typography
          variant="h6"
          fontWeight={"700"}
          color={"#fff"}
        >{`${Math.round(props.value)}%`}</Typography>
      </CircularProgressWithLabelWrapper>
    </div>
  );
};

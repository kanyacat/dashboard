import { useAppSelector } from "../../../../redux/hooks";
import { backgrounds } from "../../../../helpers/backgroundWeather";
import { Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

interface ICardWrapperProps {
  children: ReactNode;
  styles?: object;
}

export const CardWrapper = ({ children, styles }: ICardWrapperProps) => {
  const weather = useAppSelector((state) => state.weather.items);

  return (
    <Card
      sx={{
        ...styles,
        backgroundImage:
          weather.current && ` ${backgrounds[weather.current.condition.code]}`,
        borderRadius: "1.5rem",
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

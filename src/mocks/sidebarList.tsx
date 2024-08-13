import HomeIcon from "@mui/icons-material/Home";
import CloudIcon from "@mui/icons-material/Cloud";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export const sidabarList = [
  {
    text: "Overview",
    icon: (
      <HomeIcon
        sx={{
          color: "#B3B9C7",
          "&:hover": {
            color: "#000",
          },
        }}
      />
    ),
  },
  {
    text: "Weather",
    icon: <CloudIcon />,
  },
  {
    text: "Currencies",
    icon: <CurrencyExchangeIcon />,
  },
];

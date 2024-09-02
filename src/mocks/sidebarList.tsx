import HomeIcon from "@mui/icons-material/Home";
import CloudIcon from "@mui/icons-material/Cloud";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export const sidebarList = [
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
    text: "News",
    icon: <NewspaperIcon />,
  },
];

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CloudIcon from "@mui/icons-material/Cloud";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import styled from "@emotion/styled";

const list = [
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

const StyledListItemButton = styled(ListItemButton)(() => ({
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#635bff",
    color: "#fff",
  },
}));

export const SidebarList = (
  <>
    <ListItemText
      primaryTypographyProps={{
        fontSize: "17px",
        color: "#B3B9C7",
        fontWeight: "500",
        mb: "8px",
      }}
      primary={"Dashboards"}
    />
    {list.map((el) => (
      <StyledListItemButton>
        <ListItemIcon
          sx={{
            color: "#B3B9C7",
            //не работает, надо что-то придумать
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          {el.icon}
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontSize: "18px", fontWeight: "600" }}
          primary={el.text}
        />
      </StyledListItemButton>
    ))}
  </>
);

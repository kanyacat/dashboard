import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "@emotion/styled";
import { sidabarList } from "../../mocks/sidebarList";

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
    {sidabarList.map((el) => (
      <StyledListItemButton key={el.text}>
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

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "@emotion/styled";
import { sidebarList } from "../../mocks/sidebarList";

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
    {sidebarList.map((el) => (
      <StyledListItemButton key={el.text}>
        <ListItemIcon
          sx={{
            color: "#B3B9C7",
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

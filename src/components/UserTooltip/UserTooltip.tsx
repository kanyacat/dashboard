import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { userTooltip } from "../../mocks/userTooltip";
import { UserTooltipButton } from "./styled";

interface UserTooltipProps {
  name: string;
  email: string;
}

export const UserTooltip = ({ name, email }: UserTooltipProps) => {
  return (
    <div style={{ padding: "15px" }}>
      <Typography fontSize={"17px"}>{name}</Typography>
      <Typography variant="body2" sx={{ color: "#667085" }}>
        {email}
      </Typography>
      <Divider sx={{ margin: "15px 0" }} />
      {userTooltip.map((tooltip) => (
        <ListItemButton
          sx={{ borderRadius: "10px", padding: "2px 3px", mb: "3px" }}
          key={tooltip.name}
        >
          <ListItemIcon>{tooltip.icon}</ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: "17px",
              ml: "-20px",
            }}
            primary={tooltip.name}
          />
        </ListItemButton>
      ))}
      <Divider sx={{ mt: "15px", mb: "10px" }} />
      <UserTooltipButton>Log out</UserTooltipButton>
    </div>
  );
};

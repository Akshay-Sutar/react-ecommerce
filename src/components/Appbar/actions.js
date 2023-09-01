import { FavoriteOutlined, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  MyList,
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCart />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteOutlined />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Person />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
};

import { SearchRounded } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { Actions } from "./actions";
import { useUIContext } from "../../context/ui";

export const AppbarDesktop = ({ matches }) => {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchRounded onClick={() => setShowSearchBox(true)} />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

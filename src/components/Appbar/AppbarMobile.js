import { Menu, SearchRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useUIContext } from "../../context/ui";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { Actions } from "./actions";

export const AppbarMobile = ({ matches }) => {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Menu />
      </IconButton>
      <AppbarHeader textAlign="center" variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchRounded onClick={() => setShowSearchBox(true)} />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

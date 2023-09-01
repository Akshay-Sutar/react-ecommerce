import { CloseOutlined } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { lighten } from "polished";
import React from "react";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export const AppDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseOutlined
            sx={{ fontSize: "2.5rem", color: lighten(0.09, Colors.secondary) }}
          ></CloseOutlined>
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider variant="halfway" />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider variant="halfway" />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider variant="halfway" />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <Divider variant="halfway" />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

import { Close, SearchOutlined } from "@mui/icons-material";
import { IconButton, Slide } from "@mui/material";
import React from "react";
import { useUIContext } from "../../context/ui";
import { SearchBoxContainer, SearchField } from "../../styles/searchBox";

export const SearchBox = () => {
  const { showSeacrhBox, setShowSearchBox } = useUIContext();

  return (
    <Slide direction="down" in={showSeacrhBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="Search..."
        />
        <IconButton>
          <SearchOutlined
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearchBox(false)}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <Close sx={{ fontSize: "4rem" }} color="secondary"></Close>
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
};

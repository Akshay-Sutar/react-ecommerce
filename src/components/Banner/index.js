import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle1">
          Eiusmod laborum ea mollit minim consequat sunt ipsum aliquip tempor.
        </BannerDescription>
        <BannerShopButton color="primary">Show Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
};

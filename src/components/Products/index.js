import { Grid, useMediaQuery, useTheme, Container } from "@mui/material";
import React from "react";
import { products } from "../../data";
import { SingleProduct } from "./SingleProduct";
import { SingleProductDesktop } from "./SingleProductDesktop";

export const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      display="flex"
      flexDirection="column"
      alignItems="center"
      xs={2}
      sm={4}
      md={4}
    >
      {matches ? (
        <SingleProduct product={product} matches={matches}></SingleProduct>
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: "20px 4px 10px 4px" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

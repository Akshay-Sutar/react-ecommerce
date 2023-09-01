import { Favorite, FitScreen, ShareOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import { useDialogModal } from "../../hooks/useDialogModal";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import { ProductDetail } from "../ProductDetails";
import { ProductMeta } from "./ProductMeta";

export const SingleProduct = ({ product, matches }) => {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail);

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches}></ProductMeta>
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <ShareOutlined color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  );
};

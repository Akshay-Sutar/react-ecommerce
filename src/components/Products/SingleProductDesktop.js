import { Favorite, FitScreen, ShareOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import { ProductMeta } from "./ProductMeta";
import { useDialogModal } from "../../hooks/useDialogModal";
import { ProductDetail } from "../ProductDetails";

export const SingleProductDesktop = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <Favorite />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to Cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareOutlined color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches}></ProductMeta>
      <ProductDetailDialog product={product} />
    </>
  );
};

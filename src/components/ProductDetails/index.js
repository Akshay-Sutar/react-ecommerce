import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  styled,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { Product, ProductImage } from "../../styles/products";
import { Colors } from "../../styles/theme";
import { IncrementDecrement } from "../UI";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export const ProductDetail = ({ product, open, onClose }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{ background: Colors.secondary }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          Product Title
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle1">SKU 123</Typography>
            <Typography variant="subtitle1">5 in stock</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body">
              {product.description}
              {product.description}
              {product.description}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <IncrementDecrement />
              <Button variant="contained">Add to cart</Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box sx={{ mt: 4, color: Colors.light }}>
              <FacebookIcon />
              <InstagramIcon sx={{ pl: theme.spacing(4) }} />
              <TwitterIcon sx={{ pl: theme.spacing(4) }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
};

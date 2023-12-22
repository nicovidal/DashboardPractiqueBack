import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import { useGetProductsQuery } from "../../state/api.js";
import { Header } from "../../components/Header";

export const Products = () => {
  return (
    <Box>
      <Header title="PRODUCTS" subtitle="See your list of products." />
    </Box>
  );
};

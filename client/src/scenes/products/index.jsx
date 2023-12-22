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
  const {data,isLoading}=useGetProductsQuery();
  const isNonMobile=useMediaQuery("(min-width:1000px)")
  console.log("data",data)



  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {data || !isLoading ? 
        <Box>

        </Box>:<></>
      }
    </Box>
  );
};

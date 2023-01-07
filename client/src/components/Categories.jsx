import { Box, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { categories } from "../assets/fakeDb";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "20px",
        background: "#F5F9FB",
        padding: "25px",
      }}
    >
      <Stack spacing={2} direction={{ lg: "row", sm: "column" }}>
        {categories.map((item) => (
          <Box flex={1}>
            <CategoryItem key={item.id} item={item} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Categories;

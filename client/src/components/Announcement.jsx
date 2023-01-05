import { Box } from "@mui/material";

import React from "react";

const Announcement = () => {
  return (
    <Box
      sx={{
        height: "35px",
        background: "lightblue",
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        padding: "10px",
        fontSize: "14px",
      }}
    >
      15% off & free shipping on your first order. Hurry Up!!
    </Box>
  );
};

export default Announcement;

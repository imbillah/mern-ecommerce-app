import React from "react";
import Box from "@mui/material/Box";
import { Badge, Button, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={1}
    >
      <Box display={"flex"} alignItems={"center"} flex={1}>
        <span>EN</span>
        <TextField
          sx={{ marginLeft: "15px" }}
          label="Search"
          id="outlined-size-small"
          size="small"
        ></TextField>
      </Box>
      <Box
        flex={1}
        fontSize={"25px"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"blue"}
      >
        ECOMEX
      </Box>
      <Box
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        marginRight={2}
      >
        <Button sx={{ marginRight: "5px" }} variant="outlined">
          Register
        </Button>
        <Button sx={{ marginRight: "5px" }} variant="outlined">
          Log In
        </Button>
        <Badge badgeContent={1} color="primary" sx={{ cursor: "pointer" }}>
          <ShoppingCartIcon sx={{ color: "blue" }} />
        </Badge>
      </Box>
    </Box>
  );
};

export default Navbar;

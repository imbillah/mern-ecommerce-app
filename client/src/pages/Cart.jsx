import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { styled, Box, Container } from "@mui/system";

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Cart = () => {
  const TitleBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    div: {
      span: {
        color: "blue",
        margin: "0 5px",
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  });
  const ProductContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    height: "100vh",
    margin: "20px 0",
  });
  const ProductBox = styled(Box)({
    flex: 2,
    padding: "15px",
  });

  const ProductDetail = styled(Box)({
    img: {
      height: "120px",
      marginRight: "15px",
      borderRadius: "5px",
    },
    h4: {
      margin: "10px 0",
      fontSize: "20px",
    },
    h5: {
      margin: "10px 0",
    },
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10px",
  });
  const SummaryBox = styled(Box)({
    flex: 1,
    padding: "15px",
    h2: {
      margin: "15px 0",
    },
  });

  const TableBox = styled(Box)({
    table: {
      borderCollapse: "collapse",
    },
    td: {
      padding: "15px",
      border: "1px solid #ccc",
      texAlign: "left",
      fontSize: "18px",
      width: "85%",
      height: "65px",
    },
  });
  return (
    <Fragment>
      <Navbar />
      <Announcement />
      <Container maxWidth="xl">
        <h1>YOUR CART</h1>
        <TitleBox direction="row">
          <Button endIcon={<KeyboardArrowRight />} variant="contained">
            Continue Shopping
          </Button>
          <div>
            <span>Shopping Bag (3)</span>
            <span>Your Wishlist (0)</span>
          </div>
          <Button endIcon={<ShoppingCartCheckoutIcon />} variant="contained">
            Check Out Now
          </Button>
        </TitleBox>
        <ProductContainer>
          <ProductBox>
            <ProductDetail>
              <Box display={"flex"} alignItems={"center"}>
                <img
                  src="https://images.othoba.com/images/thumbs/0378352_mens-t-shirt-black.jpeg"
                  alt=""
                />
                <Box>
                  <h4>Product: Mans T Shirt</h4>
                  <h5>ID: 29892748973</h5>
                  <p>Color: Black</p>
                  <h5>Size: L</h5>
                </Box>
              </Box>
              <Box>
                <Box display={"flex"} alignItems={"center"}>
                  <RemoveCircleOutlineIcon
                    sx={{ cursor: "pointer", fontSize: 30 }}
                  />
                  <p style={{ margin: "0 10px" }}>1</p>
                  <ControlPointIcon sx={{ cursor: "pointer", fontSize: 30 }} />
                </Box>
                <h2 style={{ textAlign: "center", margin: "15px 0" }}>$29</h2>
              </Box>
            </ProductDetail>
          </ProductBox>
          <SummaryBox>
            <h2>Order Summary</h2>
            <TableBox>
              <table>
                <tbody>
                  <tr>
                    <td>Sub Total</td>
                    <td>$49</td>
                  </tr>
                  <tr>
                    <td>Shipping Fee</td>
                    <td>$5.5</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td>$8</td>
                  </tr>
                </tbody>
              </table>
            </TableBox>
          </SummaryBox>
        </ProductContainer>
      </Container>
    </Fragment>
  );
};

export default Cart;

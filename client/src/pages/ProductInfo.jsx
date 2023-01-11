import { Box, Button, Stack, styled } from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLeter from "../components/NewsLeter";

const ProductInfo = () => {
  const ImageBox = styled(Box)({
    flex: 1,
    img: {
      height: 450,
      borderRadius: "10px",
      display: "block",
      margin: "0 auto",
    },
  });
  const InfoBox = styled(Box)({
    flex: 1,
    h3: {
      fontSize: "25px",
      margin: "10px 0",
    },
    p: {
      fontSize: "18px",
      margin: "15px 0",
      letterSpacing: "1px",
    },
    span: {
      fontSize: 22,
      color: "blue",
    },
    div: {
      display: "flex",
      alignItems: "center",
      span: {
        margin: "5px",
        width: "25px",
        height: "25px",
        borderRadius: "3px",
        cursor: "pointer",
      },
    },
    select: {
      padding: "5px",
      marginLeft: 5,
    },
    option: {
      fontSize: "16px",
    },
  });
  const QuantityBox = styled(Box)({
    marginTop: "20px",
    span: {
      color: "black",
    },
  });
  return (
    <Fragment>
      <Navbar />
      <Announcement />
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <Stack direction="row">
          <ImageBox>
            <img
              src="https://cdn.shopify.com/s/files/1/0362/9803/1148/products/DSF4008_900x.jpg?v=1656569361"
              alt=""
            />
          </ImageBox>
          <InfoBox>
            <h3>Womens Suit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem dignissimos ducimus blanditiis dolore, voluptas ipsam.
            </p>
            <span>Price: $35</span>
            <div>
              <p>Color: </p>
              <Box>
                <span style={{ background: "black" }}></span>
                <span style={{ background: "grey" }}></span>
                <span style={{ background: "skyblue" }}></span>
              </Box>
              <Box marginLeft={2}>
                <p>Size: </p>
                <select>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
              </Box>
            </div>
            <QuantityBox>
              <RemoveCircleOutlineIcon
                sx={{ cursor: "pointer", fontSize: 30 }}
              />
              <p style={{ margin: "0 10px" }}>1</p>
              <ControlPointIcon sx={{ cursor: "pointer", fontSize: 30 }} />
              <Button
                sx={{ marginLeft: "8px", fontWeight: 700 }}
                variant="outlined"
              >
                Add to cart
              </Button>
            </QuantityBox>
          </InfoBox>
        </Stack>
      </Container>
      <NewsLeter />
      <Footer />
    </Fragment>
  );
};

export default ProductInfo;

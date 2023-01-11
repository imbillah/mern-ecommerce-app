import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Container, styled } from "@mui/material";
import Products from "../components/Products";
import NewsLeter from "../components/NewsLeter";

const ProductList = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");

  const FlexBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "35px",
  });
  const FilterBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <Fragment>
      <Navbar />
      <Announcement />
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <h1>Womens Fashion</h1>
        <FlexBox>
          {/* Filter products */}
          <FilterBox>
            <h4>Filter Products:</h4>
            {/* Color */}
            <Box sx={{ minWidth: 120, marginLeft: "10px" }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={color}
                  label="Color"
                  onChange={(e) => setColor(e.target.value)}
                >
                  <MenuItem value={"white"}>White</MenuItem>
                  <MenuItem value={"blue"}>Blue</MenuItem>
                  <MenuItem value={"red"}>Red</MenuItem>
                  <MenuItem value={"black"}>Black</MenuItem>
                  <MenuItem value={"yellow"}>Yellow</MenuItem>
                  <MenuItem value={"green"}>Green</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Size */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Size"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <MenuItem value={"small"}>S</MenuItem>
                  <MenuItem value={"medium"}>M</MenuItem>
                  <MenuItem value={"large"}>L</MenuItem>
                  <MenuItem value={"xl"}>XL</MenuItem>
                  <MenuItem value={"double-xl"}>XXL</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </FilterBox>
          {/* Sort products */}
          <FilterBox>
            <h4>Sort Products:</h4>
            {/* Color */}
            <Box sx={{ minWidth: 120, marginLeft: "10px" }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={"newest"}>Newest</MenuItem>
                  <MenuItem value={"lowest"}>Lowest</MenuItem>
                  <MenuItem value={"highest"}>Highest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </FilterBox>
        </FlexBox>
      </Container>
      <Products />
      <NewsLeter />
    </Fragment>
  );
};

export default ProductList;

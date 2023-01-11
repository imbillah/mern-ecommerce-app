import { Box, Button, Grid, styled } from "@mui/material";
import { Container } from "@mui/system";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { popularProducts } from "../assets/fakeDb";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Products = () => {
  const GridBox = styled(Box)({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
  });

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "20px",
        background: "#F5F9FB",
        padding: "25px",
      }}
    >
      <GridBox>
        {popularProducts.map((item) => (
          <Box key={item.id}>
            <Card sx={{ minHeight: 350 }}>
              <CardCover>
                <img
                  style={{ maxHeight: 350, objectFit: "cover" }}
                  src={item.img}
                  loading="lazy"
                  alt=""
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 300px)",
                }}
              />
              <CardContent
                sx={{
                  color: "white",
                  justifyContent: "flex-end",
                  alignItems: "center",

                  opacity: 0,
                  transition: "all 0.8s ease",
                  "&:hover": {
                    opacity: 1,
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Typography mb={3}>
                  <ShoppingCart
                    sx={{
                      fontSize: "40px",
                      cursor: "pointer",
                    }}
                  />
                  <FavoriteBorderIcon
                    sx={{
                      fontSize: "40px",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </GridBox>
    </Container>
  );
};

export default Products;

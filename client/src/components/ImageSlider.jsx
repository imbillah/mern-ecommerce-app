import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const ImageSlider = () => {
  const centerItems = {
    padding: "60px",
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ height: "100vh", marginTop: "10px", background: "#F5F9FB" }}
    >
      <Carousel autoPlay={false}>
        <Box display={"flex"} p={2}>
          <Box flex={1}>
            <div>
              <img
                src="https://i.ibb.co/DG69bQ4/2.png"
                style={{ width: "80%" }}
                alt=""
              />
            </div>
          </Box>
          <Box flex={1} style={centerItems}>
            <h1 style={{ fontSize: "50px" }}>WINTER SALE</h1>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "3px",
                margin: "25px 0",
              }}
            >
              Latest Winter Collection with a flat 20% discount until the season
              end
            </p>
            <Button variant="outlined">SHOP NOW</Button>
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box flex={1}>
            <div>
              <img
                src="https://i.ibb.co/cXFnLLV/3.png"
                style={{ width: "80%" }}
                alt=""
              />
            </div>
          </Box>
          <Box flex={1} style={centerItems}>
            Text02
          </Box>
        </Box>
      </Carousel>
    </Container>
  );
};

export default ImageSlider;

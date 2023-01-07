import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { styled } from "@mui/material";

const CategoryItem = ({ item }) => {
  const CardButton = styled(Button)({
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.8s ease",
    "&:hover": {
      background: "white",
      color: "black",
      transform: "scale(1.2)",
    },
  });
  return (
    <>
      <Card sx={{ minHeight: "420px" }}>
        <CardCover>
          <img src={item.img} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography
            level="h2"
            fontSize="25px"
            textColor="#fff"
            fontWeight="bold"
            mb={3}
          >
            {item.title}
          </Typography>
          <Typography textColor="#fff">
            <CardButton variant="outlined">SHOP NOW</CardButton>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CategoryItem;

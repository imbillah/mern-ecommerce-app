import { TextField } from "@mui/material";
import { Container, Box, styled } from "@mui/system";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const LogIn = () => {
  const MainContainer = styled(Container)({
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      'url("https://i.postimg.cc/ryJ3Mk6K/black-friday-elements-assortment.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });
  const RegisterBox = styled(Box)({
    borderRadius: "5px",
    padding: "15px",
    background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(3px)",
    maxWidth: "420px",
    h2: {
      fontSize: "25px",
      textAlign: "center",
      margin: "10px 0",
      color: "blue",
    },
  });
  const BackToHome = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    border: "1px solid blue",
    cursor: "pointer",
    width: "150px",
    padding: "3px",
    borderRadius: "5px",
    "&:hover": {
      background: "lightblue",
    },
  });
  return (
    <MainContainer maxWidth="xl">
      <RegisterBox>
        <h2>Log In</h2>
        <TextField
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
          size="small"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          margin="normal"
          type="password"
          required
          fullWidth
        />
        <Button
          sx={{
            display: "block",
            margin: "25px auto",
          }}
          variant="contained"
        >
          LOG IN
        </Button>
        <BackToHome>
          <span>Back To</span>
          <HomeOutlinedIcon
            sx={{ marginLeft: "15px", fontSize: "35px", color: "blue" }}
          />
        </BackToHome>
      </RegisterBox>
    </MainContainer>
  );
};

export default LogIn;

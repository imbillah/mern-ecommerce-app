import { Box, Stack, styled, TextField } from "@mui/material";
import Input from "@mui/joy/Input";
import SendIcon from "@mui/icons-material/Send";
const BoxContainer = styled(Stack)({
  background: "#F2ECEA",
  margin: "20px 0",
  minHeight: "250px",
  textAlign: "center",
  padding: "20px",
});

const Title = styled(Box)({
  fontSize: "25px",
  textTransform: "uppercase",
  margin: "10px 0",
});
const Subtitle = styled(Box)({
  fontSize: "18px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginBottom: "15px",
});
const InputContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "450px",
  margin: "0 auto",
  padding: "5px",
});
const NewsLeter = () => {
  return (
    <BoxContainer direction="column">
      <Title>
        <h1>Subscribe Us</h1>
      </Title>
      <Subtitle>
        <p>Get update on our hot deals & promotion</p>
      </Subtitle>
      <InputContainer>
        <TextField
          fullWidth
          label="Your email"
          size="small"
          variant="standard"
        />
        <SendIcon
          sx={{
            fontSize: "40px",
            color: "blue",
            cursor: "pointer",
            marginLeft: "5px",
          }}
        />
      </InputContainer>
    </BoxContainer>
  );
};

export default NewsLeter;

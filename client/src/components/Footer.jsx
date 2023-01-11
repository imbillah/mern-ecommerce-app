import { Box } from "@mui/material";
import { Stack, styled } from "@mui/system";
import React from "react";

const Footer = () => {
  const FooterContainer = styled(Stack)({
    padding: "10px",
    background: "#F5F9FB",
  });
  const Info = styled(Box)({
    flex: 1,
  });
  const Title = styled(Box)({
    marginBottom: "10px",
    fontSize: "17px",
  });
  const UsefulLinks = styled(Box)({
    flex: 1,
    cursor: "pointer",
    marginLeft: "15px",
  });
  const Contact = styled(Box)({
    flex: 1,
    marginLeft: "15px",
  });

  return (
    <FooterContainer direction="row">
      <Info>
        <Title>
          <h2>Ecomex</h2>
        </Title>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vero
          natus soluta eligendi? Dignissimos, dolor?
        </p>
      </Info>
      <UsefulLinks>
        <div>
          <Title>
            <h2>Useful Links</h2>
          </Title>
          <p>Home</p>
          <p>Women Fashion</p>
          <p>Category</p>
          <p>Casual Wear</p>
        </div>
      </UsefulLinks>
      <Contact>
        <Title>
          <h2>Contact</h2>
        </Title>
        <p>address</p>
        <p>phone</p>
        <p>email</p>
        <p>payment</p>
      </Contact>
    </FooterContainer>
  );
};

export default Footer;

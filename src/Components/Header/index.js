import React from "react";
import { Container, Title, Navbar, Button } from "./styled";
import ScreensType from "../../data/screens";

const Header = ({ screen, changeScreen }) => {
  return (
    <Container>
      <Title>Smart City Analysis</Title>
      <Navbar>
        <Button
          selected={screen === ScreensType.FORM}
          onClick={changeScreen.bind(null, ScreensType.FORM)}
        >
          Form
        </Button>
        <Button
          selected={screen === ScreensType.SHOWCASE}
          onClick={changeScreen.bind(null, ScreensType.SHOWCASE)}
        >
          Showcase
        </Button>
      </Navbar>
    </Container>
  );
};

export default Header;

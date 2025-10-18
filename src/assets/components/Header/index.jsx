import React from "react";
import { Link } from "react-router";

import logo from "../../img/logo.png";
import { Button } from "../Button";
import {
  Container,
  BuscarInputContainer,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
} from "./styles";

const Header = ({ autenticado, variant = "primary" }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logotipo" />
            {autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar..."></Input>
                </BuscarInputContainer>
                <Menu href="#">LIVES</Menu>
                <Menu href="#">GLOBAL</Menu>
              </>
            ) : null}
          </Row>
          <Row>
            {autenticado ? (
              <>
                <UserPicture src="data:image/jpeg;base64,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" />
                <br />
                <Link className="hok" to="/login">
                  <Menu variant={variant} href="#">
                    SAIR
                  </Menu>
                </Link>
              </>
            ) : (
              <>
                <MenuRight href="#">
                  <Link className="hok" to="/">
                    Home
                  </Link>
                </MenuRight>
                <MenuRight href="#">
                  <Link className="hok" to="/login">
                    Login
                  </Link>
                </MenuRight>
                <Button variant title="Entrar" size={10}></Button>
                <Button title="Cadastrar"></Button>
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };

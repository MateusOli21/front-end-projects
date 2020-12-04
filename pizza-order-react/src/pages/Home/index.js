import React from "react";

import pizzaBg from "../../assets/images/pizza-2.jpg";

import Layout from "../_layout";

import { Container, Title, Button, Content } from "./styles";

const Home = () => {
  return (
    <Layout>
      <Container bgImage={pizzaBg}>
        <Content>
          <Title>
            Monte a sua própria pizza com as nossas diversas opções.
          </Title>
          <Button to="/base">Faça seu pedido</Button>
        </Content>
      </Container>
    </Layout>
  );
};

export default Home;

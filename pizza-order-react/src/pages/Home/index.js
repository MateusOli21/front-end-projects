import React from "react";
import Button from "../../components/Button";

import Layout from "../_layout";

import { Title, Content } from "./styles";

const Home = () => {
  return (
    <Layout>
      <Content>
        <Title>Monte a sua própria pizza com as nossas diversas opções.</Title>
        <Button path="/base">Faça seu pedido</Button>
      </Content>
    </Layout>
  );
};

export default Home;

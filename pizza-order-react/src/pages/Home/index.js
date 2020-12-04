import React from "react";

import Button from "../../components/Button";
import moveYButton from "../../assets/animations/moveYButton";
import moveYTitle from "../../assets/animations/moveYTitle";

import Layout from "../_layout";

import { Title, Content } from "./styles";

const Home = () => {
  return (
    <Layout>
      <Content>
        <Title variants={moveYTitle} initial="hidden" animate="visible">
          Monte a sua própria pizza com as nossas diversas opções.
        </Title>
        <Button path="/base" variants={moveYButton}>
          Faça seu pedido
        </Button>
      </Content>
    </Layout>
  );
};

export default Home;

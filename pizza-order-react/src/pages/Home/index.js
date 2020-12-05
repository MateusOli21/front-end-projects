import React from "react";

import Button from "../../components/Button";
import moveYButton from "../../assets/animations/moveYButton";
import moveYTitle from "../../assets/animations/moveYTitle";
import exitXPage from "../../assets/animations/exitXPage";

import Layout from "../_layout";

import { Title, Content } from "./styles";

const Home = () => {
  return (
    <Layout>
      <Content exit={exitXPage.exit}>
        <Title
          variants={moveYTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
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

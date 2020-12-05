import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import moveXNegButton from "../../assets/animations/moveXNegButton";

import moveYTitle from "../../assets/animations/moveYTitle";
import pageMoveX from "../../assets/animations/pageMoveX";
import Modal from "../../components/Modal";

import { useContextValue } from "../../Context";
import Layout from "../_layout";

import {
  Content,
  Title,
  Description,
  ToppingsContainer,
  Topping,
} from "./styles";

const Order = () => {
  const [showModal, setShowModal] = useState(false);
  const { pizza } = useContextValue();

  useEffect(() => {
    function openModal() {
      setTimeout(() => setShowModal(true), 5500);
    }

    openModal();
  }, []);

  return (
    <Layout>
      <Content
        variants={pageMoveX}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Title>Agradecemos pelo seu pedido!</Title>
        <Description variants={moveYTitle}>
          Você pediu uma pizza {pizza.base.toLowerCase()} com:
        </Description>
        <ToppingsContainer>
          {pizza.toppings.map((topping, index) => (
            <Topping key={index} variants={moveXNegButton}>
              {topping}
            </Topping>
          ))}
        </ToppingsContainer>
      </Content>
      {showModal && (
        <AnimatePresence exitBeforeEnter>
          <Modal setShowModal={setShowModal} />
        </AnimatePresence>
      )}
    </Layout>
  );
};

export default Order;

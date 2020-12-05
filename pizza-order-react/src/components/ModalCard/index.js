import React from "react";
import { Link } from "react-router-dom";

import moveYModal from "../../assets/animations/moveYModal";
import { useContextValue } from "../../Context/index";

import { Container, Question, ButtonsContainer, ButtonAnswer } from "./styles";

const ModalCard = ({ setShowModal }) => {
  const { resetPizza } = useContextValue();

  const handleAnswerNo = () => {
    setShowModal(false);
  };

  const handleAnswerYes = () => {
    setShowModal(false);
    resetPizza();
  };

  return (
    <Container
      variants={moveYModal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Question>Você deseja fazer um novo pedido?</Question>
      <ButtonsContainer>
        <Link to="/">
          <ButtonAnswer onClick={handleAnswerYes}>Sim</ButtonAnswer>
        </Link>
        <ButtonAnswer onClick={handleAnswerNo} secondary="true">
          Não
        </ButtonAnswer>
      </ButtonsContainer>
    </Container>
  );
};

export default ModalCard;

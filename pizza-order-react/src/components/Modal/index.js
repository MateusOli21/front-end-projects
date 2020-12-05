import React from "react";
import backdropModal from "../../assets/animations/backdropModal";

import ModalCard from "../ModalCard";

import { Container } from "./styles";

const Modal = ({ setShowModal, showModal }) => {
  return (
    <Container variants={backdropModal} initial="hidden" animate="visible">
      <ModalCard setShowModal={setShowModal} />
    </Container>
  );
};

export default Modal;

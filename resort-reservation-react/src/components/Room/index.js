import React from "react";
import PropTypes from "prop-types";

import defaultImage from "../../assets/images/room-1.jpeg";

import {
  Container,
  ImgContainer,
  Img,
  PriceContainer,
  Price,
  RoomName,
  RoomLink,
} from "./styles";

function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <Container>
      <ImgContainer>
        <Img src={images[0] || defaultImage} alt="room" />
        <PriceContainer>
          <Price>R${price}</Price>
          <p>por noite</p>
        </PriceContainer>

        <RoomLink to={`rooms/${slug}`} className="btn-primary">
          Saiba mais
        </RoomLink>
      </ImgContainer>
      <RoomName>{name}</RoomName>
    </Container>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;

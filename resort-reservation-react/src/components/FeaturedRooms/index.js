import React, { useContext } from "react";

import { RoomContext } from "../../Context/RoomContext";
import SectionTitle from "../SectionTitle";
import Loading from "../Loading";
import Room from "../Room";

import { Container, RoomsContainer } from "./styles";

function FeaturedRooms() {
  let { loading, featuredRooms: rooms } = useContext(RoomContext);

  rooms = rooms.map((room) => <Room key={room.id} room={room} />);

  return (
    <Container>
      <SectionTitle title="Quartos em destaque" />
      <RoomsContainer>{loading ? <Loading /> : rooms}</RoomsContainer>
    </Container>
  );
}

export default FeaturedRooms;

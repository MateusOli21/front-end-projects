import React from "react";

import { withRoomConsumer } from "../../Context/RoomContext";

import SectionTitle from "../SectionTitle";
import RoomsFilter from "../RoomsFilter";
import RoomsList from "../RoomsList";
import Loading from "../Loading";

import { Container } from "./styles";

function RoomsSearch({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <SectionTitle title="Procure por quartos" />
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </Container>
  );
}

export default withRoomConsumer(RoomsSearch);

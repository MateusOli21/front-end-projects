import React from "react";
import Room from "../Room";

import { EmptySearch, Container, RoomGrid } from "./styles";

function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <EmptySearch>
        <h3>
          Infelizmente não foram encontrados quartos que correspondem com os
          parâmetros procurados
        </h3>
      </EmptySearch>
    );
  }

  return (
    <Container>
      <RoomGrid>
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </RoomGrid>
    </Container>
  );
}

export default RoomsList;

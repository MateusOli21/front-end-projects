import styled from "styled-components";

import defaultBackground from "../../assets/images/defaultBcg.jpeg";
import roomsBackground from "../../assets/images/room-2.jpeg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${({ banner }) =>
    banner === "roomsBanner" ? `60vh` : `calc(100vh - 80px)`};
  background: ${({ banner, img }) =>
    banner === "roomsBanner"
      ? `url(${img || roomsBackground}) center/cover no-repeat`
      : `url(${defaultBackground}) center/cover no-repeat`};
`;

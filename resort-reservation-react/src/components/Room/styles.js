import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  box-shadow: var(--lightShadow);
`;

export const Img = styled.img`
  width: 100%;
  display: block;
  transition: var(--mainTransition);

  &:hover {
    opacity: 0.3;
  }
`;

export const PriceContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 0.6rem;
  border-bottom-right-radius: 12px;
  color: var(--mainWhite);
  background: var(--opacityBlack);
  font-size: 0.7rem;
`;

export const Price = styled.h5`
  font-size: 0.9rem;
  letter-spacing: var(--mainSpacing);
`;

export const RoomName = styled.p`
  padding: 0.65rem 0;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: var(--mainSpacing);
  background: var(--mainGrey);
  border-radius: 0 0 5px 5px;
`;

export const RoomLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0s linear;
`;

export const ImgContainer = styled.div`
  position: relative;

  &:hover {
    background: var(--opacityBlack);
  }

  &:hover ${PriceContainer} {
    opacity: 0;
  }

  &:hover ${RoomLink} {
    transform: translate(-50%, -50%) scale(0.8);
  }
`;

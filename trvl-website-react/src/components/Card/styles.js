import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0 16px 20px;
`;

export const CardLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-flow: column;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  border-radius: 10px;

  text-decoration: none;
  overflow: hidden;

  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
`;

export const PicWrapper = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 80px 0;

  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: var(--light-blue-color);
    box-sizing: border-box;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Infos = styled.div`
  padding: 20px 30px 30px;
`;

export const Title = styled.div`
  color: var(--dark-blue-color);
  font-size: 18px;
  line-height: 24px;
`;

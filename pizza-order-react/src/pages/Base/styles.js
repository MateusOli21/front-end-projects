import styled from "styled-components";
import { motion } from "framer-motion";

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 44rem;
`;

export const Title = styled.h1`
  font-size: var(--bigger-size);
  color: var(--white-color);
  padding-bottom: 1rem;

  border-bottom: 1px solid var(--white-color);
`;

export const OptionsContainer = styled.ul`
  margin: 2.8rem 0;
`;

export const Option = styled(motion.li)`
  font-size: var(--larger-size);
  color: var(--white-color);
  margin-bottom: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &.active {
    font-weight: bold;
    color: var(--primary-color);
  }

  &:hover {
    color: var(--primary-color);
  }
`;

export const ButtonContainer = styled.div`
  height: 2.2rem;
  display: flex;
  align-items: center;
`;

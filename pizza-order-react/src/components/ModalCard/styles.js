import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 32rem;
  padding: 2.4rem 2.8rem;
  border-radius: 0.6rem;
  border: none;
  background: var(--white-color);
`;

export const Question = styled.p`
  font-size: var(--normal-size);
  color: var(--secondary-color);
`;

export const ButtonsContainer = styled.div`
  margin: 1.2rem 0;
`;

export const ButtonAnswer = styled.button`
  padding: 1rem 1.8rem;
  font-weight: 700;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  border-radius: 0.6rem;
  color: ${({ secondary }) =>
    secondary ? "var(--secondary-color)" : "var(--white-color)"};

  background: ${({ secondary }) =>
    secondary ? "transparent" : "var(--primary-color)"};

  border: ${({ secondary }) =>
    secondary
      ? "1px solid var(--secondary-color)"
      : "1px solid var(--primary-color)"};

  &:hover {
    color: var(--white-color);
    background: ${({ secondary }) =>
      secondary ? "var(--secondary-color)" : "var(--primary-alt-color)"};
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 1.4rem 1.8rem;
  border: none;
  border-radius: 0.6rem;
  background: var(--primary-color);

  &:hover {
    background: var(--primary-color);
  }
`;

export const PageLink = styled(Link)`
  font-size: var(--normal-size);
  font-weight: 700;
  color: var(--white-color);
`;

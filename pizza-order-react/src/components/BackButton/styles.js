import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;

  padding: 1.4rem 1.8rem;
  border: 2px solid var(--primary-color);
  border-radius: 0.6rem;
  background: transparent;
  position: absolute;
  right: 0;

  cursor: pointer;
`;

export const PageLink = styled(Link)`
  font-size: var(--normal-size);
  font-weight: 700;
  color: var(--white-color);
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const Content = styled(motion.div)`
  width: 100%;
  max-width: 48rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(motion.h1)`
  font-size: var(--bigger-size);
  text-align: center;
  color: var(--white-color);
  margin-bottom: 1.6rem;
`;

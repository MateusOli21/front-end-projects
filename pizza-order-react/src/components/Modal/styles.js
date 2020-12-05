import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);
`;

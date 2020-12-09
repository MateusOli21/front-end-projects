import React from "react";

import { Text } from "./styles";

const Headline = ({ children, alt }) => {
  return <Text alt={alt}>{children}</Text>;
};

export default Headline;

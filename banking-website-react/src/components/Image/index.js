import React from "react";

import { Img } from "./styles";

const Image = ({ source, alt, invertOrder }) => {
  return <Img src={source} alt={alt} order={invertOrder} />;
};

export default Image;

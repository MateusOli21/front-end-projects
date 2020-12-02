import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

import { Container } from "./styles";

const ScrollTopButton = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  const checkButtonVisible = () =>
    window.pageYOffset > 560 ? setButtonVisible(true) : setButtonVisible(false);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    checkButtonVisible();
    window.addEventListener("scroll", checkButtonVisible);
  }, []);

  return (
    <Container isVisible={buttonVisible} onClick={scrollTop}>
      <MdKeyboardArrowUp size={22} />
    </Container>
  );
};

export default ScrollTopButton;

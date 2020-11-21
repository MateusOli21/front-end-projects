import styled from "styled-components"
import heroImgBg from "../../images/background2.jpg"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -80px;

  background: url(${heroImgBg}) center center/cover no-repeat;
  object-fit: contain;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: clamp(50px, 60px, 80px);
    text-align: center;
    color: var(--white-color);
  }

  p {
    font-size: 30px;
    margin-top: 8px;
    text-align: center;
    color: var(--white-color);
  }
`

export const Buttons = styled.div`
  margin: 32px 0;
`

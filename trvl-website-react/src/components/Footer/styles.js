import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 4rem 0 2rem 0;
  background: var(--black-color);
`;

export const Subscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    padding: 6px 20px;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    border: 1px solid var(--white-color);
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;

    input {
      margin-bottom: 12px;
    }
  }

  @media screen and (min-width: 761px) {
    input {
      margin-right: 10px;
    }
  }
`;

export const Heading = styled.h2`
  color: var(--white-color);
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Text = styled.p`
  color: var(--white-color);
  font-size: 16px;
  margin-bottom: 20px;
`;

export const FooterLinks = styled.section`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin: 42px 0 16px;
`;

export const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    gap: 10px;
  }
`;

export const LinksItems = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 170px;

  h2 {
    color: var(--white-color);
    margin-bottom: 14px;
  }

  a {
    color: var(--gray-color);
    text-decoration: none;
    margin-bottom: 4px;
    transition: all 0.3s ease-out;

    &:hover {
      color: var(--white-color);
    }
  }
`;

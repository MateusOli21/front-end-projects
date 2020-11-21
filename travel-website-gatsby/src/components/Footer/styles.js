import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background: var(--black-color);
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`

export const MainLogo = styled.div`
  display: flex;
  align-items: center;
  color: var(--white-color);
  font-size: 1.5rem;

  span {
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
  }
`
export const WebsiteRights = styled.small`
  color: var(--white-color);

  @media screen and (max-width: 760px) {
    margin: 16px 0;
  }
`

export const SocialMidiaLinks = styled.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 960px) {
    max-width: 240px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: var(--white-color);
`

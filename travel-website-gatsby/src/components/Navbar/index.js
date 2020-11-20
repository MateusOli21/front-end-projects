import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { IconContext } from "react-icons"
import { FaBars, FaTimes } from "react-icons/fa"

import {
  Nav,
  Container,
  Logo,
  Icon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./styles"

const Navbar = () => {
  const [isBarsMenuClicked, setBarsMenuClicked] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleChangeNav = () =>
    window.scrollY >= 80 ? setScroll(true) : setScroll(false)

  const handleToggleMobibleIcon = () => setBarsMenuClicked(!isBarsMenuClicked)

  useEffect(() => {
    handleChangeNav()
    window.addEventListener("scroll", handleChangeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} isClicked={isBarsMenuClicked}>
          <Container>
            <Logo to="/">
              <Icon />
              <span>Explor</span>
            </Logo>

            <MobileIcon onClick={handleToggleMobibleIcon}>
              {isBarsMenuClicked ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu isClicked={isBarsMenuClicked}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/images">Imagens</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/destinations">Destinos</NavLink>
              </NavItem>
            </NavMenu>
          </Container>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

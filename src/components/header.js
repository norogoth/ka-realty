import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/global"

const Header = ({ siteTitle }) => (
  <HeaderDiv>
    <GlobalStyle />
    <SiteHeading>KA Realty</SiteHeading>
    <CurrentStatus>Status</CurrentStatus>
    <Links>
      <HeaderLink>About</HeaderLink>
      <HeaderLink>I want to x</HeaderLink>
    </Links>
  </HeaderDiv>
)

export default Header

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: clamp(1rem, 5vh, 1.5rem);
  background: ${"var(--primary-color)"};
  height: 100%;
  color: white;
  padding: .3rem;
`

const SiteHeading = styled.h2`
  overflow: auto;
  font-family: "champagne_bold";
`
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw;
  margin: 0 1rem;
`
const CurrentStatus = styled.label`
  font-family: "champagne_bold";
`
const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
  height: 100%;
  font-family: "champagne_bold";

  &:hover {

  }
`
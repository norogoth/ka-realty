import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/global"


const Header = (props,{ siteTitle }) => (
  <HeaderDiv>
    <GlobalStyle />
    <SiteHeading to="/">KA Realty</SiteHeading>
    <CurrentStatus>Information on {props.buyOrSell}ing</CurrentStatus>
    <Links>
      <HeaderLink to="/other/about">About</HeaderLink>
      <HeaderLink to={"/" + props.buyOrSell === "buy" ? "sell" : "buy"+"/main"}>I want to {props.buyOrSell === "buy" ? "sell" : "buy"}</HeaderLink>
    </Links>
  </HeaderDiv>
)

export default Header

const headerFont = "champagne";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: clamp(1rem, 5vh, 1.5rem);
  background: ${"var(--primary-color)"};
  height: 100%;
  color: white;
  padding: .3rem;
`

const SiteHeading = styled(Link)`
  overflow: auto;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-family: ${headerFont};
  margin-left: .5rem;
`
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw;
  margin: 0 1rem;
  max-width: 200px;
`
const CurrentStatus = styled.label`
  font-family: ${headerFont};
  font-size: 1.5rem;
`
const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
  height: 100%;
  font-family: ${headerFont};

  &:hover {

  }
`
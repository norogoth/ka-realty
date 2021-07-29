import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/global"

function getSiteHeadingString(props) {
  const siteStatus = props.buyOrSell;
  let siteHeadingString = "";
  switch (siteStatus) {
    case "buy":
      siteHeadingString = "Info on Buying";
      break;
    case "sell":
      siteHeadingString = "Info on Selling";
      break;
    case "about":
      siteHeadingString = "About";
      break;
      case "contact":
        siteHeadingString = "Contact Me"
        break;
    default:
      siteHeadingString = "error: undefined."
  }
  return siteHeadingString;
}

function getLink(props) {
  const buyOrSell = props.buyOrSell;
  return props.buyOrSell === "buy" ? "sell/main" : "buy/main";
}

const Header = (props,{ siteTitle }) => (
  <HeaderDiv>
    <GlobalStyle />
    <SiteHeading to="/">KA Realty</SiteHeading>
    <CurrentStatus>{getSiteHeadingString(props)}</CurrentStatus>
    <Links>
      <HeaderLink to="/other/about">About Me</HeaderLink>
      <HeaderLink to="/other/contact">Contact Me</HeaderLink>
      <HeaderLink to={"/" + getLink(props)}>I want to {props.buyOrSell === "buy" ? "sell" : "buy"}</HeaderLink>
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
  align-content: center;
  text-align: center;
  width: 30vw;
  margin: 0 1rem;
  max-width: 320px;
`
const CurrentStatus = styled.label`
  font-family: ${headerFont};
  font-size: 1.5rem;
`
const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color:black;
  text-align: center;
  height: 100%;
  font-family: ${headerFont};
  background-color: ${'var(--secondary-color)'};
  border-radius: .5rem;
  padding: .5rem;

  &:hover {

  }
`
import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/global"

const Header = ({ siteTitle }) => (
  <HeaderDiv>
  <GlobalStyle/>
    <SiteHeading>KA Realty</SiteHeading>
  </HeaderDiv>
)

export default Header

const HeaderDiv = styled.div`
  height: clamp(1rem, 5vh, 1.5rem);
  background: ${"var(--primary-color)"};
  height: 100%;
  color: white;
`

const SiteHeading = styled.h2`
  overflow: auto;
`
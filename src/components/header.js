import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/global"

const Header = ({ siteTitle }) => (
  <HeaderDiv>
  <GlobalStyle/>
    <SiteHeading>KA Realty</SiteHeading>
    <CurrentStatus>Status</CurrentStatus>
    <Links>
      <Link>About</Link>
      <Link>I want to x</Link>
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
`
const Links = styled.div`

`
const CurrentStatus = styled.label`

`
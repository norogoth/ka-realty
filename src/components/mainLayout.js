import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideBar from './SideBar'
import Header from './header'
import styled from "styled-components"
import Footer from './Footer'

import { GlobalStyle } from "../styles/global"

const MainLayout = (props, {children}) => {

    return (
        <MainLayoutDiv>
            <GlobalStyle/>
            <Header buyOrSell={props.buyOrSell}/>
            <NavAndMain>
                <SideBar buyOrSell={props.buyOrSell}/>
                <MainContent>
                    <p>main content area</p>
                    {children}
                </MainContent>
            </NavAndMain>
            <Footer/>
        </MainLayoutDiv>
    )
}

export default MainLayout;

const MainLayoutDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const NavAndMain = styled.div`
    min-height:100vh;
    display: grid;
    grid-template-columns: 200px 1fr;
    flex-grow: 1;
`
const MainContent = styled.div`
    background: gray;
`
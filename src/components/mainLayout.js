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
        <>
            <GlobalStyle/>
            <Header buyOrSell={props.buyOrSell}/>
            <NavAndMain>
                <SideBar buyOrSell={props.buyOrSell}/>
                <MainContent>
                    <p>main content area</p>
                </MainContent>
            </NavAndMain>
            <Footer/>
        </>
    )
}

export default MainLayout;

const NavAndMain = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    min-height:90vh;
`
const MainContent = styled.div`
    background: gray;
`
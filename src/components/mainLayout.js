import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from './NavBar'
import Header from './header'
import styled from "styled-components"
import Footer from './Footer'

import { GlobalStyle } from "../styles/global"

const MainLayout = (props, {children}) => {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <NavAndMain>
                <NavBar buyOrSell={props.buyOrSell}/>
                <MainContent>
                    <p>main content area</p>
                    {children}
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
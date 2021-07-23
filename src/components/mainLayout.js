import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from './NavBar'
import Header from './header'
import styled from "styled-components"

import { GlobalStyle } from "../styles/global"

const MainLayout = (props, {children}) => {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <NavAndMain>
                <NavBar buyOrSell={props.buyOrSell}/>
                <MainContent>
                    {children}
                </MainContent>
            </NavAndMain>
        </>
    )
}

export default MainLayout;

const NavAndMain = styled.div`

`
const MainContent = styled.div`

`
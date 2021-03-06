import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideBar from './SideBar'
import Header from './header'
import styled from "styled-components"
import Footer from './Footer'

import { GlobalStyle } from "../styles/global"

const MainLayout = (props, {children}) => {
/*
    if (props.children){
        props.children.forEach ((child, index) => {
            console.log("child: ",child);
        })
    }
*/
const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

React.useEffect(() => {
    window.addEventListener("resize", () => {
        getSideBar();
        setScreenWidth(window.innerwidth);
        console.log("width is ",window.innerwidth);
    })
}, [])

function getSideBar() {
    const width = window.innerWidth;
    if (width <= 650){
        return null;
    }
    else {
        return <SideBar buyOrSell={props.buyOrSell}/>
    }
}

    return (
        <MainLayoutDiv>
            <GlobalStyle/>
            <Header buyOrSell={props.buyOrSell}/>
            <NavAndMain className="navAndMain" screenWidth={screenWidth}>
                {getSideBar()}
                <MainContent>
                    {props.children}
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

    @media screen and (max-width: 650px){
        display:flex;
    }
`
const MainContent = styled.div`
    background: gray;
    @media screen and (max-width: 650px){
        width: 100%;
    }
`
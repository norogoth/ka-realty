import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { GlobalStyle } from '../styles/global'

const Footer = () => {
    return (
        <FooterDiv>
            <GlobalStyle/>
            <FooterContent>
                <Credentials className="divOfInfo">
                    <StaticImage width={100} className="footerLogo" src="../assets/images/EXP color logo.png" />
                    <Info>EXP DRE#01878277</Info>
                    <Info>DRE#01988823</Info>
                </Credentials> 
                <Contact className="divOfInfo">
                    <Info>(951)500-0048</Info>
                    <Info>aakerkaren@gmail.com</Info>
                </Contact>
            </FooterContent>
        </FooterDiv>
    )
}

export default Footer

const Info = styled.div`

`
const KvPair = styled.div`

`
const CatName = styled.label`

`
const CatContent = styled.label`

`
const FooterDiv = styled.div`
    color: white;
    background: black;
`
const FooterContent = styled.div`
    height: 100%;
    display: flex;
   color: white; 
   padding: 1rem;
`
const Credentials = styled.div`
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`
import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
    return (
        <FooterDiv>
            <FooterContent>
                <Credentials>
                    <StaticImage src="../images/gatsby-icon.png"/>
                </Credentials> 
                <Contact>
                </Contact>
            </FooterContent>
        </FooterDiv>
    )
}

export default Footer

const FooterDiv = styled.div`
    color: white;
    background: black;
    min-height: 300px;
`
const FooterContent = styled.div`

`
const Credentials = styled.div`

`
const Contact = styled.div`

`
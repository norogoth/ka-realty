import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import Video from '../assets/videos/droneHome.mp4'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from './Footer'
import { GlobalStyle } from '../styles/global'

const Hero = () => {
    return (
        <HeroContainer>
            <GlobalStyle/>
            <HeroBg>
                <VideoBg src={Video} autoPlay loop muted/>
            </HeroBg>
            <HeroWithLogo>
                <StaticImage width={100} src="../assets/images/EXP color logo.png" alt="EXP realty logo"/>
                <HeroContent>
                <HeroItems>
                    <HeroH1>Karen Aaker</HeroH1>
                    <StaticImage src="../assets/images/headshot_w_bg.jpg" className="headerImage"/>
                    <SubtitleDiv>
                        <HeroSubtitle>Here to help you, not to hound you!</HeroSubtitle>
                        <HeroSubtitle>EXP DRE#01878277</HeroSubtitle>
                        <HeroSubtitle>DRE#01988823</HeroSubtitle>
                    </SubtitleDiv>
                    <HeroButtons>
                        <Button className="heroButton" state={{links:"sell"}} primary to="/sell/main">I want to Sell</Button>
                        <Button className="heroButton" state={{links:"buy"}} primary to="/buy/main">I want to Buy</Button>
                    </HeroButtons>
                    </HeroItems> 
                </HeroContent>
            </HeroWithLogo>
        </HeroContainer>
    )
}

export default Hero

const HeroWithLogo = styled.div`

`

const HeaderImage = styled(StaticImage)`
    height: 100%;
`

const HeroContainer = styled.div`
    height: 100vh;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const HeroContent = styled.div`
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const HeroBg = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
`

const HeroItems = styled.div`

`
const HeroH1 = styled.h2`
    font-size: clamp(3rem, 7vw, 5rem);
`

const HeroSubtitle = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin: .5rem;
`

const HeroButtons = styled.div`
   display: flex; 
   justify-content: center;

   @media screen and (max-width: 800px) {
       flex-direction: column;
       align-items: center;
   }
`
const SubtitleDiv = styled.div`
    margin: 2rem 0;
`
import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import Video from '../assets/videos/droneHome.mp4'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} autoPlay loop muted/>
            </HeroBg>
            <HeroContent>
               <HeroItems>
                   <HeroH1>Karen Aaker</HeroH1>
                   <StaticImage src="../assets/images/headshot_w_bg.jpg" className="headerImage"/>
                   <HeroSubtitle>Helping you find your dream home.</HeroSubtitle>
                   <HeroButtons>
                       <Button className="heroButton" state={{links:"buy"}} primary to="/buy/main">I want to Buy</Button>
                       <Button className="heroButton" state={{links:"sell"}} primary to="/sell/main">I want to Sell</Button>
                   </HeroButtons>
                </HeroItems> 
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeaderImage = styled(StaticImage)`
`

const HeroContainer = styled.div`
    height: 90vh;
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
    height: 100%;
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
    font-size: clamp(1.2rem, 3vw, 2rem);
    margin: 2rem 0;
`

const HeroButtons = styled.div`
   display: flex; 
   justify-content: center;

   @media screen and (max-width: 800px) {
       flex-direction: column;
       align-items: center;
   }
`
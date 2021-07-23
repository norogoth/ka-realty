import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import Video from '../assets/videos/droneHome.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} autoPlay loop muted/>
            </HeroBg>
            <HeroContent>
               <HeroItems>
                   <HeroH1>Karen Aaker</HeroH1>
                   <HeroSubtitle>Helping you find your dream home.</HeroSubtitle>
                   <HeroButtons>
                       <Button state={{links:"buy"}} primary to="/buy/buy">I want to Buy</Button>
                       <Button state={{links:"sell"}} primary to="/sell/sell">I want to Sell</Button>
                   </HeroButtons>
                </HeroItems> 
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

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
    margin-bottom: 2rem;
`

const HeroButtons = styled.div`
   display: flex; 

   @media screen and (max-width: 800px) {
       flex-direction: column;
   }
`
import React from 'react'
import Header from '../../components/header'
import styled from 'styled-components'
import { Carousel, UncontrolledCarousel } from 'reactstrap'
import { GlobalStyle } from '../../styles/global'
import { useStaticQuery, graphql } from 'gatsby'

/*
const data = useStaticQuery(graphql`
  
`)
*/
const items = [
  {
    src: '/solid-background.jpg',
    altText: 'Slide 1',
    caption: '"this realtor good."',
    header: 'Person 1',
    key: '1'
  },
  {
    src: '/solid-background.jpg',
    altText: 'Slide 2',
    caption: 'I like this realtor.',
    header: 'Person 2',
    key: '2'
  },
  {
    src: '/solid-background.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const About = () => {
    return (
        <AboutDiv>
            <GlobalStyle/>
            <Header buyOrSell="about"/>
            <p>about works</p>
            <TestimonialCarousel items={items}/>
        </AboutDiv>
    )
}

export default About

const AboutDiv = styled.div`

`
const CarouselHeading = styled.h3`

`
const CarouselParagraph = styled.p`

`
const TestimonialCarousel = styled(UncontrolledCarousel)`
    height: 70vh;
    width: 80vw;
`
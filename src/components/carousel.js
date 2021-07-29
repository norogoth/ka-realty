import React from 'react'
import { GlobalStyle } from '../styles/global'
import { UncontrolledCarousel } from 'reactstrap'

//as of now, do not use.

const Carousel = () => {
    return (
        <CarouselDiv>
            <TestimonialCarousel items={items}/>
        </CarouselDiv>
    )
}

export default Carousel

const TestimonialCarousel = styled(UncontrolledCarousel)`
    height: 70vh;
    width: 80vw;
`
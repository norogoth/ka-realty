import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header'

const Contact = () => {
    return (
        <ContactDiv>
            <Header buyOrSell="contact"/>
            <ContentWrapper>
                <Form>
                    <ContactHeader>Contact Me</ContactHeader>
                    <Subtitle></Subtitle>
                    <ContactInput name="email" placeholder="your email" type="text"></ContactInput>
                    <EmailContent name="content" placeholder="type your message here" type="text"></EmailContent>
                    <ContactInput className="standardButton" type="submit"></ContactInput>
                </Form>
            </ContentWrapper>
        </ContactDiv>
    )
}

export default Contact

const ContactInput = styled.input`
    margin: 1rem 0;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
`
const EmailContent = styled.textarea`
    height: 40vh;
`
const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const ContactHeader = styled.h3`
   margin-top: 1rem; 
    text-align: center;
`
const Subtitle = styled.p`
    text-align: center;
`
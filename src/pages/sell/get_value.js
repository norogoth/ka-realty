import React from 'react'
import MainLayout from '../../components/mainLayout'
import styled from "styled-components"


const Get_value = () => {
    function clickSubmit(){
        console.log("submit was clicked.");
    }
    console.log("get value should be rendering right now so uh.");
    return (
        <MainLayout buyOrSell="sell" method="POST" data-netlify="true">
            <ContentDiv>
                <Content>
                    <ValueHeading>My Home's Value</ValueHeading>
                    <Description>Enter your address, email and name and I will find your home's value for you!</Description>
                    <InputDiv name="home value" netlify>
                        <Input name="address" placeholder="address"/>
                        <Input name="email" placeholder="email"/>
                        <Input name="name" placeholder="name"/>
                        <SubmitButton onClick={() => clickSubmit()}>Submit</SubmitButton>
                    </InputDiv>
                </Content>
            </ContentDiv>
        </MainLayout>
    )
}

export default Get_value

const maxInputWidth = "20rem";

const Description = styled.p`
    color: white;
    padding: 1rem;
`
const ValueHeading = styled.div`
    margin-top: 1rem;
    color: white;
    font-size: clamp(1.2rem, 5vw, 2rem);
    text-align: center;
    font-family: "champagne";
`
const Input = styled.input`
    max-width: ${maxInputWidth};
    padding: .5rem;
    border-radius: .25rem;
`
const InputDiv = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 40vh;
`
const SubmitButton = styled.button`
    max-width: ${maxInputWidth};
    background: ${({neutral}) => (neutral? "black" : "var(--secondary-color)")};
    color: ${({neutral}) => (neutral? "white" : "black")};
    padding: ${({primary}) => (primary? "1.25rem" : ".5rem")};
    font-size: ${({primary}) => (primary? "clamp(1.2rem, 2.5vw, 2rem)" : "1rem")};
    margin: ${({primary}) => (primary? "1rem" : "0rem")};
    border-radius: .25rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;

    &:hover {
        background: ${({neutral}) => (neutral? "white" : "var(--secondary-highlight)")}
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: darkgray;
    border-radius: 1.5rem;
    width: 30%;
    min-width: 300px;
   min-height: 400px;
`
const ContentDiv = styled.div`
    background-image: url("../../assets/images/blurred_home.jpg");
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 100%;
`
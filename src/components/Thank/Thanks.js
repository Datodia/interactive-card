import React from 'react'
import styled from 'styled-components'

export const Thanks = ({ setShowThank, setName, setNumber, setMM, setYY, setCvc }) => {

    const handleClick = () => {
        setName(null)
        setNumber(null)
        setMM(null)
        setYY(null)
        setCvc(null)
        setShowThank(true)
    }

    return (
        <Wrapper>
            <Img src='assets/complete.svg' />
            <Thank>THANK YOU!</Thank>
            <Desc>We’ve added your card details</Desc>
            <Submit onClick={handleClick}>Continue</Submit>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 327px;
    margin: auto;
    margin-top: 91px;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    @media screen and (min-width: 900px) {
        width: 350px;
        display: flex;
        margin-top: 0;
        height: 100vh;
        margin-left: 200px;
        align-items: center;
    }
    @media screen and (min-width: 1200px) {
        width: 381px;
        display: flex;
        height: 100vh;
        margin-left: auto;
        justify-content: center !important; 
        align-items: center;
    }
`

const Img = styled.img`

`

const Thank = styled.h1`
    letter-spacing: 3.42px;
    font-size: 18px;
    margin-top: 35px;
`
const Desc = styled.h1`
    color: #8F8694;
    font-size: 18px;
    margin-top: 16px;
`

const Submit = styled.button`
    width: 327px;  
    height: 53px;
    background-color: #21092F;
    border: none;
    color: white;
    font-size: 18px;
    margin-top: 48px;
    cursor: pointer;
    border-radius: 8px;
    &:hover{
        background-color: #4639fa;
        transition: all .5s;
    }
`
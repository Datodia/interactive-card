import React from 'react'
import styled from 'styled-components'

export const Card = ({ name, number, cvc, mm, yy }) => {



    return (
        <Wrapper>
            <Back>
                <CCV>{cvc || "000"}</CCV>
            </Back>
            <Front>
                <Circles>
                    <White />
                    <LitCirc />
                </Circles>
                <Input>{number || "0000 0000 0000 0000"}</Input>
                <Info>
                    <Name>{name || "jane APPLESEED"}</Name>
                    <Date>{mm || '00'}/{yy || '00'}</Date>
                </Info>
            </Front>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    background-image: url('assets/bg-main-mobile.png');
    background-repeat: repeat;

    @media screen and (min-width: 900px) {
        background-image: url('assets/bg-main-desktop.png');
        width: 300px;
        height: 100vh;
        margin: 0;
    }
    @media screen and (min-width: 1200px) {
        width: 483px;
    }
`
const Back = styled.div`
    width: 286px;
    height: 157px;
    background-image: url('assets/bg-card-back.png');
    background-size: 286px 157px;
    transform: translate(24px, 32px);
    @media screen and (min-width: 900px) {
        width: 300px;
        height: 185px;
        background-size: 300px 185px;
        transform: translate(143px,400px);
    }
    @media screen and (min-width: 1200px) {
       width: 447px;
       height: 245px;
       background-size: 447px 245px;
       transform: translate(223px,430px);
    }
`
const CCV = styled.h1`
    font-size: 9px;
    color: white;
    width: 20px;
    letter-spacing: 1.29px;
    transform: translate(227px,70px);
    @media screen and (min-width: 900px) {
        font-size: 14px; 
        transform: translate(223px,83px);
    }
    @media screen and (min-width: 1200px) {
        transform: translate(359px,111px);
    }
    
`

const Front = styled.div`
    width: 286px;
    height: 157px;
    background-image: url('assets/bg-card-front.png');
    background-size: 286px 157px;
    transform: translate(-25px, 120px);
    position: absolute;
    padding: 17px 20px 20px 19px;
    @media screen and (min-width: 900px) {
        width: 300px;
        height: 185px;
        background-size: 300px 185px;
        transform: translate(80px,183px);
    }
    @media screen and (min-width: 1200px) {
       width: 447px;
       height: 245px;
       background-size: 447px 245px;
       transform: translate(138px,145px);
       padding: 28px 32px 28px 27px;
    }
`

const Circles = styled.div`
    width: 54px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1200px) {
       width: 84px;
       height: 47px;  
    }
`
const White = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    @media screen and (min-width: 1200px) {
       width: 46px;
       height: 47px; 
    }
`

const LitCirc = styled.div`
    width: 13.5px;
    height: 13.5px;
    border: 1px solid white;
    border-radius: 50%;
    @media screen and (min-width: 1200px) {
       width: 21px;
       height: 21px; 
    }
`

const Input = styled.h1`
    font-size: 18px;
    color: white;
    margin-top: 37px;
    letter-spacing: 2.2px;
    @media screen and (min-width: 1200px) {
        margin-top: 50px;
       font-size: 28px;
    }
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
    @media screen and (min-width: 1200px) {
        margin-top: 25px;
    }
`

const Name = styled.h1`
    font-size: 9px;
    color: white;
    letter-spacing: 1.29px;
    text-transform: uppercase;
    @media screen and (min-width: 900px) {
        font-size: 12px;
    }
    @media screen and (min-width: 1200px) {
       font-size: 14px;
    }
`

const Date = styled.h1`
    font-size: 9px;
    color: white;
    letter-spacing: 1.29px;
    @media screen and (min-width: 900px) {
        font-size: 12px;
    }
    @media screen and (min-width: 1200px) {
       font-size: 14px;
    }
`
import React from 'react'
import styled from 'styled-components'

export const Card = ({ name, number }) => {

    const text = 992;

    return (
        <Wrapper>
            <Back>
                <CCV>{text}</CCV>
            </Back>
            <Front>
                <Circles>
                    <White />
                    <LitCirc />
                </Circles>
                <Input>{number || "0000 0000 0000 0000"}</Input>
                <Info>
                    <Name>{name || "jane APPLESEED"}</Name>
                    <Date>00/00</Date>
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
    /* justify-content: center; */
    align-items: center;
    margin: auto;
    background-image: url('assets/bg-main-mobile.png');
    background-repeat: repeat;
`
const Back = styled.div`
    width: 286px;
    height: 157px;
    background-image: url('assets/bg-card-back.png');
    background-size: 286px 157px;
    transform: translate(24px, 32px);
`
const CCV = styled.h1`
    font-size: 9px;
    color: white;
    width: 20px;
    letter-spacing: 1.29px;
    transform: translate(227px,70px);
`

const Front = styled.div`
    width: 286px;
    height: 157px;
    background-image: url('assets/bg-card-front.png');
    background-size: 286px 157px;
    transform: translate(-25px, 120px);
    position: absolute;
    padding: 17px 20px 20px 19px;
`

const Circles = styled.div`
    width: 54px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const White = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
`

const LitCirc = styled.div`
    width: 13.5px;
    height: 13.5px;
    border: 1px solid white;
    border-radius: 50%;
`

const Input = styled.h1`
    font-size: 18px;
    color: white;
    margin-top: 37px;
    letter-spacing: 2.2px;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
`

const Name = styled.h1`
    font-size: 9px;
    color: white;
    letter-spacing: 1.29px;
    text-transform: uppercase;
`

const Date = styled.h1`
    font-size: 9px;
    color: white;
    letter-spacing: 1.29px;
`
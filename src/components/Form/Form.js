import React from 'react'
import styled from 'styled-components'

export const Form = ({ name, setName, number, setNumber }) => {

    return (
        <FormDiv>
            <Wraper>
                <Label>Cardholder Name</Label>
                <InputDiv type={'text'} placeholder='e.g. Jane Appleseed' />

                <Label>Card Number</Label>
                <InputDiv type={"text"} placeholder="e.g. 1234 5678 9123 0000" />

                <Div>
                    <Date>
                        <Label>Exp. Date (MM/YY)</Label>
                        <DateInput placeholder='MM' />
                        <DateInput placeholder='YY' />
                    </Date>
                    <Cvc>
                        <Label>CVC</Label>
                        <CvcInput placeholder='e.g. 123' />
                    </Cvc>
                </Div>

                <Submit type='submit' value={'Submit'} />
            </Wraper>
        </FormDiv>
    )
}

const FormDiv = styled.form`
    width: 327px;
    border: 2px solid red;
    margin: auto;
    margin-top: 91px;
`

const Wraper = styled.div`

`

const Label = styled.label`
    font-size: 12px;
`
const InputDiv = styled.input`
    width: 327px;
    height: 45px;
    font-size: 18px;
    padding: 0 10px;
    border: 1px solid #DFDEE0;
    margin: 9px 0 20px 0;
    outline: none;
    border-radius: 8px;

    &:focus{
        border: 1px solid #610595;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`
const Date = styled.div`
`
const Cvc = styled.div`
`
const DateInput = styled.input`
    width: 72px;
    height: 45px;
    border: 1px solid #DFDEE0;
    font-size: 18px;
    padding: 11px 16px;
    border-radius: 8px;
    margin: 9px 7px 20px 0;
`
const CvcInput = styled.input`
    width: 164px;
    height: 45px;
    border: 1px solid #DFDEE0;
    font-size: 18px;
    padding: 11px 16px;
    border-radius: 8px;
    margin: 9px 0 20px 0;
`

const Submit = styled.input`
    width: 327px;
    height: 54px;
    background-color: #21092F;
    font-size: 18px;
    color: white;
    border:  none;
    border-radius: 8px;
    cursor: pointer;
`

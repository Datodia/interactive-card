import React from 'react'
import styled from 'styled-components'
import inputMask from 'react-input-mask'

export const Form = ({ name, setName, number, setNumber, cvc, setCvc, mm, setMM, yy, setYY, nameError, setNameError, cardError, setCardError, mmError, setMmError, yyError, setYyError, cvcError, setCvcError, setShowThank }) => {

    const nameChange = (e) => {
        setName(e.target.value)
        setNameError('')
    }
    const numberChange = (e) => {
        setNumber(e.target.value)
        setCardError('')
    }
    const cvcChange = (e) => {
        setCvc(e.target.value)
        setCvcError("")
    }
    const mmChange = (e) => {
        setMM(e.target.value)
        setMmError("")
    }
    const yyChange = (e) => {
        setYY(e.target.value)
        setMmError('')
        setYyError('')
    }


    const nameRegex = /^[a-zA-Z ]*$/i
    const numberRegex = /^[\d\s]+$/i
    const mmRegex = /^[\d]+$/i

    const sumbit = (e) => {
        e.preventDefault()
        if (name === "" || name === null) {
            setNameError(`Can't be blank`)
        }
        else if (!nameRegex.test(name)) {
            setNameError(`Wrong format type only letters`)
        }


        if (number === '' || number === null) {
            setCardError(`Can't be blank`)
        }
        else if (number.length <= 18) {
            setCardError(`Fill 16 digit`)
        }
        else if (!numberRegex.test(number)) {
            setCardError(`Wrong Format only numbers`)
        }

        if (mm === "" || mm === null) {
            setMmError(`Can't be blank`)
        } else if (mm.length < 2) {
            setMmError(`Fill 2 digit`)
        }
        else if (!mmRegex.test(mm)) {
            setMmError(`Wrong Format`)
        } else if (parseInt(mm) > 12) {
            setMmError(`Can't be more than 12`)
        }

        if (yy === "" || yy === null) {
            setYyError(`Can't be blank`)
        } else if (yy.length < 2) {
            setYyError(`Fill 2 digit`)
        }
        else if (!mmRegex.test(yy)) {
            setYyError(`Wrong Format`)
        }

        if (cvc === "" || cvc === null) {
            setCvcError(`Can't be blank`)
        } else if (cvc.length < 3) {
            setCvcError('Fill 3 digit')
        } else if (!mmRegex.test(cvc)) {
            setCvcError("Wrong format, fill only digit")
        }


        if (numberRegex.test(number) && number.length > 18
            && nameRegex.test(name) && name !== "" && name !== null
            && mmRegex.test(yy) && yy.length > 1
            && mmRegex.test(mm) && mm.length > 1
            && mmRegex.test(cvc) && cvc.length > 2) {
            setShowThank(false)
        }


    }




    return (
        <FormDiv onSubmit={sumbit}>
            <Wraper>
                <Label>Cardholder Name</Label>
                <InputDiv nameError={nameError} type={'text'} onChange={nameChange} value={name} maxLength={30} placeholder='e.g. Jane Appleseed' />
                <NameEroor>{nameError}</NameEroor>

                <Label>Card Number</Label>
                <MaskingInput cardError={cardError} maskChar={null} mask={'**** **** **** ****'} onChange={numberChange} placeholder="e.g. 1234 5678 9123 0000" />
                <CardError>{cardError}</CardError>

                <Div>
                    <Date>
                        <Label>Exp. Date (MM/YY)</Label>
                        <MMInput mmError={mmError} onChange={mmChange} maxLength={2} placeholder='MM' />
                        <YYInput yyError={yyError} onChange={yyChange} maxLength={2} placeholder='YY' />
                        <DateError>{mmError || yyError}</DateError>
                    </Date>
                    <Cvc>
                        <Label>CVC</Label>
                        <CvcInput cvcError={cvcError} onChange={cvcChange} maxLength={3} placeholder='e.g. 123' />
                        <CvcError>{cvcError}</CvcError>
                    </Cvc>
                </Div>

                <Submit type='submit' value={'Submit'} />
            </Wraper>
        </FormDiv>
    )
}

const FormDiv = styled.form`
    width: 327px;
    /* border: 2px solid red; */
    margin: auto;
    margin-top: 91px;
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

const Wraper = styled.div`

`

const Label = styled.label`
    font-size: 12px;
    @media screen and (min-width: 1200px) {
        font-size: 14px;
    }
`
const InputDiv = styled.input`
    width: 100%;
    height: 45px;
    font-size: 18px;
    padding: 0 10px;
    border: ${props => props.nameError ? "1px solid red" : "1px solid #DFDEE0"} ;
    margin: 9px 0 0 0;
    outline: none;
    border-radius: 8px;

    &:focus{
        border: 1px solid #610595;
    }
`

const MaskingInput = styled(inputMask)`
    width: 100%;
    height: 45px;
    font-size: 18px;
    padding: 0 10px;
    border: ${props => props.cardError ? "1px solid red" : "1px solid #DFDEE0"} ;
    margin: 9px 0 0 0;
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
const MMInput = styled.input`
    width: 72px;
    height: 45px;
    border: ${props => props.mmError ? "1px solid red" : "1px solid #DFDEE0"};
    outline: none;
    font-size: 18px;
    padding: 11px 16px;
    border-radius: 8px;
    margin: 9px 7px 0px 0;
    &:focus{
        border: 1px solid #610595;
    }
    @media screen and (min-width: 1200px) {
        width: 87px;
    }
`
const YYInput = styled.input`
    width: 72px;
    height: 45px;
    border:  ${props => props.yyError ? "1px solid red" : "1px solid #DFDEE0"} ;
    outline: none;
    font-size: 18px;
    padding: 11px 16px;
    border-radius: 8px;
    margin: 9px 7px 0px 0;
    &:focus{
        border: 1px solid #610595;
    }
    @media screen and (min-width: 1200px) {
        width: 87px;
    }
`
const CvcInput = styled.input`
    width: 164px;
    height: 45px;
    border: ${props => props.cvcError ? "1px solid red" : "1px solid #DFDEE0"};
    font-size: 18px;
    padding: 11px 16px;
    border-radius: 8px;
    outline: none;
    margin: 9px 0 0px 0; 
    &:focus{
        border: 1px solid #610595;
    }
`

const Submit = styled.input`
    width: 100%;
    height: 54px;
    background-color: #21092F;
    font-size: 18px;
    color: white;
    border:  none;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: #4639fa;
        transition: all .5s;
    }
`

const NameEroor = styled.h1`
    font-size: 12px;
    color: #FF5050;
    margin-top: 8px;
    margin-bottom: 20px;
    @media screen and (min-width: 1200px) {
        font-size: 13px;
    }
`
const CardError = styled.h1`
    font-size: 12px;
    color: #FF5050;
    margin-top: 8px;
    margin-bottom: 20px;
    @media screen and (min-width: 1200px) {
        font-size: 13px;
    }
`

const DateError = styled.h1`
    font-size: 12px;
    color: #FF5050;
    margin-top: 8px;
    margin-bottom: 20px;
    @media screen and (min-width: 1200px) {
        font-size: 13px;
    }
`

const CvcError = styled.h1`
    font-size: 12px;
    color: #FF5050;
    margin-top: 8px;
    margin-bottom: 20px;
    @media screen and (min-width: 1200px) {
        font-size: 13px;
    }
`
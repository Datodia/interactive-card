import React from 'react'
import styled from 'styled-components'
import inputMask from 'react-input-mask'

export const Form = ({ name, setName, number, setNumber, cvc, setCvc, mm, setMM, yy, setYY, nameError, setNameError, cardError, setCardError, mmError, setMmError, yyError, setYyError, cvcError, setCvcError }) => {

    const nameChange = (e) => {
        setName(e.target.value)
        setNameError('')
    }
    const numberChange = (e) => {
        let cardNum = e.target.value.replace(/(.{4})/g, "$1 ");
        setNumber(cardNum)
        setCardError('')
    }
    const cvcChange = (e) => {
        setCvc(e.target.value)
    }
    const mmChange = (e) => {
        setMM(e.target.value)
    }
    const yyChange = (e) => {
        setYY(e.target.value)
    }


    const nameRegex = /^[a-zA-Z ]*$/g
    const numberRegex = /^[\d\s]+$/i

    const sumbit = (e) => {
        e.preventDefault()
        if (name === "" || name === null) {
            setNameError(`Can't be blank`)
        }
        else if (!nameRegex.test(name)) {
            setNameError(`Wrong format type only letters`)
        }
        console.log(nameRegex.test(name))


        if (number === '' || number === null) {
            setCardError(`Can't be blank`)
        }
        else if (number.length <= 18) {
            setCardError(`Fill 16 digit`)
        }
        else if (!numberRegex.test(number)) {
            setCardError(`Wrong Format only numbers`)
        }
        // else if (!isNaN(+number)) {
        //     setCardError(`Wrong Format only numbers`)
        // }

        //console.log(!isNaN(+number))

        console.log(numberRegex.test(number))
        //console.log(typeof (number))
        //console.log(number)
        //nameValidatiod()

    }


    return (
        <FormDiv onSubmit={sumbit}>
            <Wraper>
                <Label>Cardholder Name</Label>
                <InputDiv nameError={nameError} type={'text'} onChange={nameChange} value={name} maxLength={30} placeholder='e.g. Jane Appleseed' />
                <NameEroor>{nameError}</NameEroor>

                <Label>Card Number</Label>
                <MaskingInput cardError={cardError} type={"text"} mask={'9999 9999 9999 9999'} onChange={numberChange} placeholder="e.g. 1234 5678 9123 0000" />
                <CardError>{cardError}</CardError>

                <Div>
                    <Date>
                        <Label>Exp. Date (MM/YY)</Label>
                        <DateInput onChange={mmChange} maxLength={2} placeholder='MM' />
                        <DateInput onChange={yyChange} maxLength={2} placeholder='YY' />
                    </Date>
                    <Cvc>
                        <Label>CVC</Label>
                        <CvcInput onChange={cvcChange} maxLength={3} placeholder='e.g. 123' />
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
    border: ${props => props.nameError ? "1px solid red" : "1px solid #DFDEE0"} ;
    margin: 9px 0 0 0;
    outline: none;
    border-radius: 8px;

    &:focus{
        border: 1px solid #610595;
    }
`

const MaskingInput = styled(inputMask)`
    width: 327px;
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

const CardDiv = styled.input`
    width: 327px;
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

const NameEroor = styled.h1`
    font-size: 12px;
    color: #FF5050;
    margin-top: 8px;
    margin-bottom: 20px;
`
const CardError = styled.h1`
    font-size: 12px;
    color: #FF5050;
    margin-top: 8px;
    margin-bottom: 20px;
`
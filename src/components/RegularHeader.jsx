import React, {useRef} from "react";
import styled from "styled-components";
import {AiOutlineFileSearch} from "react-icons/ai";
import {HiOutlineExclamationCircle} from "react-icons/hi2";
import {useDispatch, useSelector} from "react-redux";
import useWindowDimensions from "../hooks/UseWindowDimensions";

export const Button = styled.div`
    padding-top: 8px;
    text-align: center;
    margin-top: 14px;
    font-size: 25px;
    font-family: "Segoe UI", serif;
    width: 15%;
    border: solid white 2px;
    color: white;
    background-color: black;
    transition: all 0.5s;

    :hover {
        border: solid darkred 2px;
        color: darkred;
    }`;

const Input = styled.input`
    font-size: 15px;
    flex-direction: column;
    color: ${props => props.inputColor || "palevioletred"};
`;


const InputStyle = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 50%;
`;

const InputWraper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 60px;
`;

const StyledSpan = styled.span`
    color: white;
    font-size: 25px;
    font-family: "Segoe UI", serif;
`;

const Error = styled.div`
    margin-top: 17px;
    font-size: 18px;
    color: red;
    text-align: center;`

const Warn = styled.div`
    margin-top: 17px;
    font-size: 35px;
    color: yellow;
    text-align: center;`

export const RegularHeader = (props) => {

    const searchField = useRef();
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    const {height, width} = useWindowDimensions();

    function handler() {
        let str = String(searchField.current.value);
        if (str.length < 3 || str.includes(" ")) {
            dispatch({type: "ERROR", msg: "Будь ласка введіть більше 3 символів і не використовуйте пробіл"});
        } else {
            dispatch({type: "SEARCH", query: str});
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handler();
        }
    }

    return (
        <>
            <InputWraper>
                <InputStyle>
                    <StyledSpan><AiOutlineFileSearch/>Пошук відео по прізвищу учасника </StyledSpan>
                    <Input onKeyPress={handleKeyPress} ref={searchField} type="text"
                           placeholder="Введіть прізвище учасника..." inputColor="black"/>
                </InputStyle>
                <Button value="" onClick={handler}>Пошук</Button>
            </InputWraper>
            {error !== "" ? <Error><HiOutlineExclamationCircle/>{error}<HiOutlineExclamationCircle/></Error> : null}
            {props.cardCount === 0 ?
                <Warn><HiOutlineExclamationCircle/>відео не знайдені<HiOutlineExclamationCircle/></Warn> : null}
        </>
    )
}

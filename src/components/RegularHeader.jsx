import React, {useRef} from "react";
import styled from "styled-components";
import {AiOutlineFileSearch} from "react-icons/ai";
import {HiOutlineExclamationCircle} from "react-icons/hi2";
import {useDispatch, useSelector} from "react-redux";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const InputWraperSection = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Button = styled.div`
    margin-top: 14px;
    font-size: 25px;
    font-family: "Segoe UI", serif;
    width: 15%;
    color: white;
    transition: all 0.5s;

    :hover {
        color: darkred;
    }`;

const Input = styled.input`
    font-size: 15px;
    flex-direction: column;
    color: ${props => props.inputColor || "palevioletred"};
    margin-bottom: 15px;
`;


const InputStyle = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;`;

const InputWraper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    height: 60px;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
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
        <InputWraperSection>
            <InputWraper>
                <InputStyle>
                    <Input onKeyPress={handleKeyPress} ref={searchField} type="text"
                           placeholder="Введіть прізвище учасника..." inputColor="black"/>
                    <Button value="" onClick={handler}>[Пошук]</Button>
                </InputStyle>
            </InputWraper>
            {error !== "" ? <Error><HiOutlineExclamationCircle/>{error}<HiOutlineExclamationCircle/></Error> : null}
            {props.cardCount === 0 ?
                <Warn><HiOutlineExclamationCircle/>відео не знайдені<HiOutlineExclamationCircle/></Warn> : null}
        </InputWraperSection>
    )
}

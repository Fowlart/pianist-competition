import React, {useEffect, useRef, useState} from "react";
import styled, {keyframes} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {FaFolder, FaUniversity} from "react-icons/fa";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const FilterContainer = styled.div`
  background-color: black;
  font-size: 25px;
  transition: all 0.6s;
  font-family: 'Jura', sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 26px;
    padding-top: 26px;
  flex-wrap: wrap;`;

const FilterSection = styled(FilterContainer)`
  align-self: center;
  margin: 14px;
  color: white;
  transition: all 0.6s;
  :hover {
    text-decoration-line: underline;
    text-decoration-color: darkred;
    text-underline-offset: 10px;
    
  }
`;

export const DivThinLine = styled.div`
  width: 100%;
  border: gray solid 1px;
  background-color: gray;
  height: 2%;
  transition: all ease;
`;

export const StyledResultsFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const grow_0 = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 0px;
  }
  100% {
    width: ${props => props.left};
  }
`;

const grow_1 = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 1px;
  }
  100% {
    width: ${props => props.left};
  }
`;


export const ThinLineInnerDiv = styled.div`
  width: ${props => props.width};
  left: ${props => props.left};
  position: relative;
  border: red solid 1px;
  background-color: red;
  height: 1%;
  animation: ${props => (props.animation % 2 === 0) ? grow_0 : grow_1} 0.5s linear;
`;

export const ResultsFilter = (props) => {

    const [sections,] = useState(props.sections);

    const [redLineWidth, setRedLineWidth] = useState("10px");
    const [redLineLeft, setRedLineLeft] = useState("10px");
    const [animation, setAnimation] = useState(0);
    const {height, width} = useWindowDimensions();
    const markedSectionRef = useRef();

    //handling redLine on resize
    useEffect(() => {
        reRenderRedLin({target:markedSectionRef.current})
    }, [width]);

    const dispatch = useDispatch();

    function reRenderRedLin(event) {
        markedSectionRef.current = event.target;
        let currentSectionWidth = event.target.getBoundingClientRect().width;
        let currentSectionLeft = event.target.getBoundingClientRect().left - 10;
        setRedLineWidth(currentSectionWidth + "px");
        setRedLineLeft(currentSectionLeft + "px");
        let counter = animation + 1;
        setAnimation(counter);
    }

    function onFilterSectionClick(selectedSection, event) {
        reRenderRedLin(event);
        let selectedSectionString = selectedSection.section;
        console.log(selectedSectionString);
        switch (selectedSectionString) {
            case `Рівненські фортепіанні студії`:
                dispatch({type: "RFS_PAGE"});
                break;
            case `Архівні відео`:
                dispatch({type: "ARCHIVE"});
                break;
            case `Номінація «Фортепіано соло»`:
                dispatch({type: "group-1"});
                break;
            case `Номінація «Фортепіанний ансамбль»`:
                dispatch({type: "group-2"});
                break;
            case `Номінація «Додатковий інструмент (фортепіано)»`:
                dispatch({type: "group-3"});
                break;
            case `Номінація «Концертмейстер»`:
                dispatch({type: "group-4"});
                break;
        }
    }

    function renderInfoPage(section) {
        if (section[0]==="Рівненські фортепіаннні студії"){
            reRenderRedLin(section[1]);
            dispatch({type: "RFS_PAGE"});
        }
        else {
            reRenderRedLin(section[1]);
            dispatch({type: "INFO_PAGE"});
        }
    }

    let renderedSections = sections.map((section) => (
        section === "Про конкурс" || section === "Рівненські фортепіаннні студії"?
            <FilterSection  onClick={()=> {
                let sec = [section,event]
                renderInfoPage(sec)

            }} key={section}> <FaUniversity/>{section}</FilterSection>
            : <FilterSection  ref={markedSectionRef} onClick={e => onFilterSectionClick({section}, e)} key={section}> <FaFolder/>{section}</FilterSection>
    ));

    return (
        <>
            <StyledResultsFilterWrapper>
                <FilterContainer children={renderedSections}/>
            </StyledResultsFilterWrapper>
            <DivThinLine><ThinLineInnerDiv width={redLineWidth} left={redLineLeft} animation={animation}/></DivThinLine>
        </>
    );
};

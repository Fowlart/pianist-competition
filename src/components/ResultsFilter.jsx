import React, {useEffect, useRef, useState} from "react";
import styled, {keyframes} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {FaFolder, FaUniversity} from "react-icons/all";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const FilterContainer = styled.div`
  font-size: 15px;
  font-family: "Segoe UI", serif;
  background-color: #232323;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;`;

const FilterSection = styled(FilterContainer)`
  align-self: center;
  margin: 10px;
  transition: all ease;
  color: lawngreen;

  :hover {
    color: red;
  }
`;

const DivThinLine = styled.div`
  width: 100%;
  border: gray solid 1px;
  background-color: gray;
  height: 2%;
  transition: all ease;
`;

const StyledResultsFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #232323;
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


const ThinLineInnerDiv = styled.div`
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
    const infoPageSectionRef = useRef();

    //handling redLine on resize
    useEffect(() => {
        reRenderRedLin({target:infoPageSectionRef.current})
    }, [width]);

    const dispatch = useDispatch();

    function reRenderRedLin(event) {
        infoPageSectionRef.current = event.target;
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
            case `Усі відео`:
                dispatch({type: "ALL"});
                break;
            case `Переможці номінації "Фортепіано соло"`:
                dispatch({type: "group-1"});
                break;
            case `Переможці номінації "Фортепіанний ансамбль"`:
                dispatch({type: "group-2"});
                break;
            case `Переможці номінації "Концертмейстер"`:
                dispatch({type: "group-3"});
                break;
        }
    }

    function renderInfoPage(event) {
        reRenderRedLin(event);
        dispatch({type: "INFO_PAGE"});
    }

    let renderedSections = sections.map((section) => (
        section === "Про конкурс" ?
            <FilterSection ref={infoPageSectionRef} onClick={renderInfoPage} key={section}> <FaUniversity/>{section} </FilterSection>
            : <FilterSection  onClick={(e) => onFilterSectionClick({section}, e)} key={section}> <FaFolder/>{section}
            </FilterSection>
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

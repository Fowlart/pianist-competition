import styled from "styled-components";
import React from "react";
import {BiLinkExternal} from "react-icons/bi";
import judges_2025 from "./info-page-imgs/judges_2025.jpeg"
import poster_2 from "./rfs-page-imgs/rfs.jpeg";
import poster_1 from "./info-page-imgs/Poster_2025_ua.png";

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const A = styled.a`
  text-align: left;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 35px;
  font-size: 35px;
  color: darkblue;
  text-decoration: none;
  transition: all 0.5s;

  :hover {
    color: darkred;
  }
`;

const P = styled.div`
  @keyframes horizontal-shaking {
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
  }
    
  margin-top: 2px;
  font-size: 40px;
  font-family: 'Jura', sans-serif;
  font-weight: 600;
  color: darkred;
  text-align: center;
  :hover{
    animation: horizontal-shaking 0.5s infinite;
  }
`;

const Poster = (props) => {

    const PosterImg = styled.img`
      margin: 5px;
      border-radius: 25px;
      filter: drop-shadow(0 0 10px rgba(100, 0, 0, 0.5));
    `;

    return (<PosterImg src={props.imgUrl}/>);
}

export const InfoPage2 = () => {
    return (<Wrapper>
            <LinkContainer>
                <A href="https://docs.google.com/document/d/1r5-WGlsTTSDkqHhC4l946vs9F80HapRt/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true">
                    <BiLinkExternal/> Учасники проекту «Рівненські фортепіанні студії»</A>
            </LinkContainer>
            <br/>
            <P>Запрошуємо до участі у проекті</P>
            <br/>
            <Poster imgUrl={poster_2}/>
        </Wrapper>
    );
}


export const InfoPage = () => {
    return (<Wrapper>
            <LinkContainer>
                <A href="https://docs.google.com/document/d/1DWiJl1oBIFH_IK4ZQeOQMx3f0jetL4iE/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true">
                    <BiLinkExternal/> Положення</A>
                <A href="https://docs.google.com/document/d/1ZCLezF1guj3lPMj4qD_3Xry1If-ujnQG/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true">
                    <BiLinkExternal/> Організаційний комітет конкурсу </A>
            </LinkContainer>
            <br/>
            <P>Афіша(ua)</P>
            <br/>
            <Poster imgUrl={poster_1}/>
            <P>Склад журі</P>
            <br/>
            <Poster imgUrl={judges_2025}/>
        </Wrapper>
    );
}

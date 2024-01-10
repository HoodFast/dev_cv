import React from 'react';
import styled from "styled-components";
import photoPath from './../../../assets/images/mainPhoto.png'
import background from './../../../assets/images/Background Image.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify='space-around'>
                <FlexWrapper direction='column' align='flex-start' justify='center'>
                    <div>
                        <Name>I`m Andrey Kuznetsov</Name>
                        <MainTitle><span>Fullstack </span>Developer</MainTitle>
                    </div>

                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                        Natoque
                        rutrum semper sed suspendisse nunc lectus.</Description>
                    <button>HIRE ME</button>
                </FlexWrapper>
                <Photo src={photoPath} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
  width: 325px;
  height: 459px;
  object-fit: cover;
`

const StyledMain = styled.div`
  background-color: #d5bcec;
  min-height: 100vh;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`
`
const Description = styled.p`

`

const Yo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`


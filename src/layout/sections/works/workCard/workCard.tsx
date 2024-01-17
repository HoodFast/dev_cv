import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {worksListType} from "../works";


type WorkCardType ={
    worksList:worksListType
}
export const WorkCard:FC<WorkCardType> = (props) => {
    return (
        <FlexWrapper justify='space-around'  gap='50px'>
            <StyledInfo>
                <h2>
                    {props.worksList.company}
                </h2>
                <span>{props.worksList.position}</span><SpanDate>{props.worksList.date}</SpanDate>
            </StyledInfo>
            <StyledDescription>
                <h2>
                    Work experience
                </h2>
                <p>
                    {props.worksList.description}
                </p>
            </StyledDescription>
        </FlexWrapper>
    );
};


const StyledInfo = styled.div`
  gap: 20px;
  margin: 20px;
  
`

const SpanDate = styled.span`
  background-color: #FFB400;
  margin: 36px;
`

const StyledDescription = styled.div`
width: 536px;
`

const x = styled.div`
display: flex;
  justify-content: space-between;
`
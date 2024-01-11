import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

type TitleType = {
    children: React.ReactNode
    description?:string
}

export const SectionTitle:FC<TitleType> = (props) => {
    return (
        <Container>
            <FlexWrapper direction="column" align='center'>
                <Title>
                    {props.children}
                </Title>

                <SectionDescription>
                    {props.description}
                </SectionDescription>
            </FlexWrapper>
        </Container>
    );
};

const Title = styled.h2`

`

const SectionDescription = styled.p`
  text-align: center;
  
`

const Container = styled.div`
  width: 440px;
  margin: 0 auto;
`
import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

type TitleType = {
    children: React.ReactNode
}

export const SectionTitle:FC<TitleType> = (props) => {
    return (
        <Container>
            <FlexWrapper direction="column" align='center'>
                <Title>
                    {props.children}
                </Title>

                <SectionDescription>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
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
import React, {FC} from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillCardType = {
    iconId: string
    title: string
    description: string
}
export const SkillCard: FC<SkillCardType> = (props) => {
    return (
        <Container>
            <FlexWrapper direction='column' align='center' gap='20px'>
                <Icon iconId={props.iconId} width='100px' height='100px' viewBox='0 0 70 70'/>
                <SkillTitle>
                    {props.title}
                </SkillTitle>
                <SkillText>
                    {props.description}
                </SkillText>
            </FlexWrapper>
        </Container>

    );
};

const SkillTitle = styled.h2`
`
const SkillText = styled.p`
    text-align: center;
`
const Container = styled.div`
  width: 30%;
  margin: 20px;
  background-color: #d5bcec;
`
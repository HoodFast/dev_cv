import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {SkillCard} from "./skillCard/SkillCard";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                MySkills
            </SectionTitle>
            <FlexWrapper justify='center' wrap='wrap'>
                <SkillCard
                    iconId='coding'
                    title=' web development'
                    description='Mobile app, website design'/>
                <SkillCard
                    iconId='photographer'
                    title=' web development'
                    description='Mobile app, website design'/>
                <SkillCard
                    iconId='ui/ux'
                    title=' web development'
                    description='Mobile app, website design'/>
                <SkillCard
                    iconId='coding'
                    title=' web development'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna
                viverra morbi.'/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #a1c9a1;
`

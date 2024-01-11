import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/sectionTitle/SectionTitle";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {WorkCard} from "./workCard/workCard";

const menuItems = ["All", "React", "Landing"]
export const Works = () => {

    return (
        <StyledWorks>
            <SectionTitle description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit. lorem ipsum'>
                Education
            </SectionTitle>
            <Menu menuItems={menuItems}/>
            <FlexWrapper>
                <WorkCard/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #d5bcec;
`
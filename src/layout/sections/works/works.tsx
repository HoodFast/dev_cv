import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {WorkCard} from "./workCard/workCard";

const menuItems = ["All", "React", "Landing"]

const worksList: worksListType[] = [
    {
        company: 'Трасса',
        position: 'Engineer',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit. Amet dapibus ' +
            'nibh ut faucibus nunc, egestas id amet ' +
            'porttitor. Pulvinar quisque sed amet, ' +
            'nulla nunc. Eleifend sodales posuere fusce ' +
            'tempus etiam et pellentesque.' +
            ' Molestie risus enim neque eget dui.'
    },
    {
        company: 'Трасса',
        position: 'Engineer',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit. Amet dapibus ' +
            'nibh ut faucibus nunc, egestas id amet ' +
            'porttitor. Pulvinar quisque sed amet, ' +
            'nulla nunc. Eleifend sodales posuere fusce ' +
            'tempus etiam et pellentesque.' +
            ' Molestie risus enim neque eget dui.'
    },
    {
        company: 'Трасса',
        position: 'Engineer',
        date: 'Jan 1016 - Dec 2021',
        description: 'Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit. Amet dapibus ' +
            'nibh ut faucibus nunc, egestas id amet ' +
            'porttitor. Pulvinar quisque sed amet, ' +
            'nulla nunc. Eleifend sodales posuere fusce ' +
            'tempus etiam et pellentesque.' +
            ' Molestie risus enim neque eget dui.'
    },
]

export type worksListType = {
    company: string
    position: string
    date: string
    description: string
}

export const Works = () => {

    const HistoryWorks = worksList.map((i, index) => {
        return (
            <div>
                {index > 0 && <Line></Line>}
                <WorkCard worksList={i}/>
            </div>
        )
    })

    return (
        <StyledWorks>
            <SectionTitle description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit. lorem ipsum'>
                Education
            </SectionTitle>
            <Menu menuItems={menuItems}/>
            {HistoryWorks}
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

const Line = styled.div`
  margin: 0 auto;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.15);
  width: 90%;
`
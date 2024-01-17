import React, {FC} from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import menu from '../../../assets/images/menu.webp'
import styled from "styled-components";

type portfolioPropsType = typeof item

const item = {photo:menu, link:''}
const menuItems = ["All", "UI Design", "Web Templates", 'Logo','Branding']
const portfolioItems:portfolioPropsType[] = [
    {photo:menu, link:'https://www.google.ru/'},
    {photo:menu, link:'https://www.google.ru/'},
    {photo:menu, link:'https://www.google.ru/'},
    {photo:menu, link:'https://www.google.ru/'},
    {photo:menu, link:'https://www.google.ru/'},
    {photo:menu, link:'https://www.google.ru/'},
    {photo:menu, link:'https://www.google.ru/'},
    {photo:menu, link:'https://www.google.ru/'},
]

export const Portfolio = () => {

    const portfolioList = portfolioItems.map(i=>{
        return(
            <PortfolioItem link={i.link} photo={i.photo}/>
        )
    })
    return (
        <FlexWrapper direction={'column'}   align={'center'}>
            <SectionTitle description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit. lorem ipsum'>
                Portfolio
            </SectionTitle>
            <Menu menuItems={menuItems}/>
            <FlexWrapper justify={'center'} wrap={'wrap'}>
                {portfolioList}
            </FlexWrapper>


        </FlexWrapper>
    );
};

const PortfolioItem:FC<portfolioPropsType> = (props)=>{
    return(
        <StyledA href={props.link}>
            <img src={props.photo}/>
        </StyledA>

    )
}

const StyledA = styled.a`
    width: 310px;
  height: 300px;
  margin:10px ;
`